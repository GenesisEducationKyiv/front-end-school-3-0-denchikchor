import { client } from '../apollo/client';
import { GET_GENRES } from '../graphql/queries';
import { fromPromise, Result } from 'neverthrow';
import type { ApiError } from './apiErrors';

export const getGenres = async (): Promise<Result<string[], ApiError>> => {
  const p = client.query<{ genres: string[] }>({ query: GET_GENRES });
  const result = await fromPromise(p, (err) => ({ message: err.message }));
  return result.map((r) => r.data.genres);
};
