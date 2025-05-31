import axios from "axios";
import { API_BASE } from "./config";
import {
  Track,
  TracksQueryParams,
  TracksResponse,
  TracksResponseRaw,
} from "../features/tracks/types";

/**
 * Fetches tracks from the backend with support for filtering, sorting, and pagination.
 * Cleans out empty or undefined params before making the request.
 * @param params - query parameters to apply (page, limit, search, sort, etc.)
 * @returns a promise resolving to a flattened TracksResponse
 */
export const getTracks = (
  params: TracksQueryParams = {},
): Promise<TracksResponse> => {
  // Remove keys with empty string or undefined values
  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== ""),
  );

  return axios
    .get<TracksResponseRaw>(`${API_BASE}/tracks`, { params: cleanedParams })
    .then((res) => {
      const { data, meta } = res.data;
      // Flatten the meta object into top-level response
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
export const createTrack = (payload: CreateTrackPayload): Promise<void> =>
  axios.post(`${API_BASE}/tracks`, payload).then(() => {});

// Updates an existing track by ID.
export const editTrack = (payload: EditTrackPayload): Promise<Track> =>
  axios
    .put<Track>(`${API_BASE}/tracks/${payload.id}`, payload)
    .then((res) => res.data);

//Deletes a track by ID.
export const deleteTrack = (id: string): Promise<void> =>
  axios.delete(`${API_BASE}/tracks/${id}`).then(() => {});

/**
 * Uploads an audio file for a specific track.
 * @param id - the track ID
 * @param file - FormData containing the audio file under a file key
 * @returns a promise resolving to the updated Track including file info
 */
export const uploadTrackFile = (id: string, file: FormData): Promise<Track> =>
  axios
    .post<Track>(`${API_BASE}/tracks/${id}/upload`, file)
    .then((res) => res.data);

/**
 * Removes the audio file from a specific track.
 * @param id - the track ID
 * @returns a promise that resolves when the file is deleted
 */
export const removeTrackFile = (id: string): Promise<void> =>
  axios.delete(`${API_BASE}/tracks/${id}/file`).then(() => {});
