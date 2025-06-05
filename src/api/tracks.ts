import axios, { AxiosError, AxiosResponse } from "axios";
import { API_BASE } from "./config";
import {
  Track,
  TracksQueryParams,
  TracksResponse,
  TracksResponseRaw,
} from "../features/tracks/types";
import { fromPromise, Result } from "neverthrow";
import type { ApiError } from "./apiErrors";
import { mapAxiosError } from "./apiHelpers";

/**
 * Fetches tracks from the backend with support for filtering, sorting, and pagination.
 * Cleans out empty or undefined params before making the request.
 * @param params - query parameters to apply (page, limit, search, sort, etc.)
 * @returns a promise resolving to a flattened TracksResponse
 */
export const getTracks = async (
  params: TracksQueryParams = {},
): Promise<Result<TracksResponse, ApiError>> => {
  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== ""),
  );

  const axiosResult: Result<
    AxiosResponse<TracksResponseRaw>,
    ApiError
  > = await fromPromise(
    axios.get<TracksResponseRaw>(`${API_BASE}/tracks`, {
      params: cleanedParams,
    }),
    mapAxiosError
  );

  return axiosResult.map((response) => {
    const { data, meta } = response.data;
    return {
      data,
      page: meta.page,
      limit: meta.limit,
      totalCount: meta.total,
      totalPages: meta.totalPages,
    };
  });
};

/**
 * Payload for creating a new track.
 */
export interface CreateTrackPayload {
  title: string;
  artist: string;
  album: string;
  genres: string[];
  coverImage?: string; // Optional URL
}

/**
 * Payload for editing an existing track.
 * Extends CreateTrackPayload with an ID property.
 */
export interface EditTrackPayload extends CreateTrackPayload {
  id: string;
}

// Creates a new track on the server.
export const createTrack = async (
  payload: CreateTrackPayload,
): Promise<Result<void, ApiError>> => {
  const result = await fromPromise(
    axios.post(`${API_BASE}/tracks`, payload),
    mapAxiosError
  );

  return result.map(() => void 0);
};

// Updates an existing track by ID.
export const editTrack = async (
  payload: EditTrackPayload,
): Promise<Result<Track, ApiError>> => {
  const result = await fromPromise(
    axios.put<Track>(`${API_BASE}/tracks/${payload.id}`, payload),
    mapAxiosError
  );

  return result.map((r) => r.data);
};

//Deletes a track by ID.
export const deleteTrack = async (
  id: string,
): Promise<Result<void, ApiError>> => {
  const result = await fromPromise(
    axios.delete(`${API_BASE}/tracks/${id}`),
    mapAxiosError
  );

  return result.map(() => void 0);
};

/**
 * Uploads an audio file for a specific track.
 * @param id - the track ID
 * @param file - FormData containing the audio file under a file key
 * @returns a promise resolving to the updated Track including file info
 */
export const uploadTrackFile = async (
  id: string,
  file: FormData,
): Promise<Result<Track, ApiError>> => {
  const result = await fromPromise(
    axios.post<Track>(`${API_BASE}/tracks/${id}/upload`, file),
    mapAxiosError
  );

  return result.map((r) => r.data);
};

/**
 * Removes the audio file from a specific track.
 * @param id - the track ID
 * @returns a promise that resolves when the file is deleted
 */
export const removeTrackFile = async (
  id: string,
): Promise<Result<void, ApiError>> => {
  const result = await fromPromise(
    axios.delete(`${API_BASE}/tracks/${id}/file`),
    mapAxiosError
  );

  return result.map(() => void 0);
};
