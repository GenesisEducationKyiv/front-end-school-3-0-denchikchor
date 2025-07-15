import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Track, TracksQueryParams, TracksResponse } from "./types";
import type { AppDispatch, RootState } from "../../store";
import type { CreateTrackPayload, EditTrackPayload } from "../../api/tracks";
import {
  getTracks as apiGetTracks,
  createTrack as apiCreateTrack,
  editTrack as apiEditTrack,
  deleteTrack as apiDeleteTrack,
  uploadTrackFile as apiUploadTrackFile,
  removeTrackFile as apiRemoveTrackFile,
} from "../../api/tracks";
import type { ApiError } from "../../api/apiErrors";
import type { RootState } from "../../store";



/**
 * Async thunk to fetch tracks with support for filtering, sorting, and pagination.
 * On error, rejects with ApiError.
 */
export const fetchTracks = createAsyncThunk<
  TracksResponse,
  TracksQueryParams,
  { rejectValue: ApiError }
>(
  "tracks/fetchTracks",
  async (
    params,
    { rejectWithValue },
  ): Promise<TracksResponse | ReturnType<typeof rejectWithValue>> => {
    const result = await apiGetTracks(params);
    if (result.isErr()) {
      return rejectWithValue(result.error);
    }
    return result.value;
  },
);

/**
 * Async thunk to create a new track.
 * On success, re-fetches the track list.
 * On error, rejects with ApiError.
 */
export const createTrack = createAsyncThunk<
  void,
  CreateTrackPayload,
  { dispatch: AppDispatch; rejectValue: ApiError }
>("tracks/createTrack", async (payload, { dispatch, rejectWithValue }) => {
  const result = await apiCreateTrack(payload);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  await dispatch(fetchTracks({}));
});

/**
 * Async thunk to edit an existing track.
 * Returns the updated track on success.
 * On error, rejects with ApiError.
 */
export const editTrack = createAsyncThunk<
  Track,
  EditTrackPayload,
  { rejectValue: ApiError }
>("tracks/editTrack", async (payload, { rejectWithValue }) => {
  const result = await apiEditTrack(payload);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return result.value;
});

/**
 * Async thunk to delete a track by ID.
 * Returns the ID on success.
 * On error, rejects with ApiError.
 */
export const deleteTrack = createAsyncThunk<
  string,
  string,
  { rejectValue: ApiError }
>("tracks/deleteTrack", async (id, { rejectWithValue }) => {
  const result = await apiDeleteTrack(id);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return id;
});

/**
 * Async thunk to upload an audio file for a specific track.
 * Returns the updated track on success.
 * On error, rejects with ApiError.
 */
export const uploadTrackFile = createAsyncThunk<
  Track,
  { id: string; file: File },
  { rejectValue: ApiError }
>(
  "tracks/uploadTrackFile",
  async ({ id, file }, { rejectWithValue }) => {
    const result = await apiUploadTrackFile(id, file);
    if (result.isErr()) {
      return rejectWithValue(result.error);
    }
    return result.value;
  }
);

/**
 * Async thunk to remove the audio file from a specific track.
 * Returns the ID of the track on success.
 * On error, rejects with ApiError.
 */
export const removeTrackFile = createAsyncThunk<
  string,
  string,
  { rejectValue: ApiError }
>("tracks/removeTrackFile", async (id, { rejectWithValue }) => {
  const result = await apiRemoveTrackFile(id);
  if (result.isErr()) {
    return rejectWithValue(result.error);
  }
  return id;
});

/**
 * Represents the shape of the tracks slice state.
 */
export interface TracksState {
  items: Track[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

const initialState: TracksState = {
  items: [],
  status: "idle",
  error: null,
  page: 1,
  limit: 10,
  totalCount: 0,
  totalPages: 1,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTracks
      .addCase(fetchTracks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
        state.totalCount = action.payload.totalCount;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchTracks.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload !== undefined) {
          state.error = action.payload.message ?? "Unknown error";
        } else {
          state.error = action.error.message ?? "Failed to load tracks";
        }
      })

      // createTrack
      .addCase(createTrack.pending, (state, action) => {
        state.status = "loading";
        const tempId = "temp-" + Date.now();
        const newTrack: Track = {
          id: tempId,
          title: action.meta.arg.title,
          artist: action.meta.arg.artist,
          album: action.meta.arg.album,
          genres: action.meta.arg.genres,
          coverImage: action.meta.arg.coverImage ?? "",
          audioFile: "",
          slug: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.items.unshift(newTrack);
      })
      .addCase(createTrack.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = state.items.filter((t) => !t.id.startsWith("temp-"));
      })
      .addCase(createTrack.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message ??
          action.error.message ??
          "Create track failed";
        state.items = state.items.filter((t) => !t.id.startsWith("temp-"));
      })

      // editTrack
      .addCase(editTrack.fulfilled, (state, action) => {
        const idx = state.items.findIndex((t) => t.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      .addCase(editTrack.rejected, (state, action) => {
        state.error =
          action.payload !== undefined
            ? action.payload.message
            : (action.error.message ?? "Edit failed");
      })

      // deleteTrack
      .addCase(deleteTrack.pending, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.meta.arg);
      })
      .addCase(deleteTrack.rejected, (state, action) => {
        console.error(
          "Failed to delete track:",
          action.payload ?? action.error.message,
        );
      })

      // uploadTrackFile
      .addCase(uploadTrackFile.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex((t) => t.id === updated.id);
        if (idx !== -1) state.items[idx] = updated;
      })
      .addCase(uploadTrackFile.rejected, (state, action) => {
        console.error(
          "Failed to upload file:",
          action.payload ?? action.error.message,
        );
      })

      // removeTrackFile
      .addCase(removeTrackFile.fulfilled, (state, action) => {
        const idx = state.items.findIndex((t) => t.id === action.payload);
        if (idx !== -1) state.items[idx].audioFile = "";
      })
      .addCase(removeTrackFile.rejected, (state, action) => {
        console.error(
          "Failed to remove file:",
          action.payload ?? action.error.message,
        );
      });
  },
});

export default tracksSlice.reducer;
export const selectAllTracks = (state: RootState) => state.tracks.items;

export const selectTrackById = (state: RootState, id: string) =>
  state.tracks.items.find((track) => track.id === id);
