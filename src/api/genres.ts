import axios, { AxiosResponse } from "axios";
import { API_BASE } from "./config";
import { fromPromise, Result } from "neverthrow";
import { ApiError } from "./apiErrors";
import { mapAxiosError } from "./apiHelpers";

export const getGenres = async (): Promise<Result<string[], ApiError>> => {
  const result: Result<AxiosResponse<string[]>, ApiError> = await fromPromise(
    axios.get<string[]>(`${API_BASE}/genres`),
    mapAxiosError,
  );

  return result.map((res) => res.data);
};
