import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Track, TracksQueryParams, TracksResponse } from "./types";
import type { AppDispatch } from "../../store";
import type { CreateTrackPayload, EditTrackPayload } from "../../api/tracks";
import {
  getTracks,
  createTrack as apiCreateTrack,
  editTrack as apiEditTrack,
  deleteTrack as apiDeleteTrack,
  uploadTrackFile as apiUploadTrackFile,
  removeTrackFile as apiRemoveTrackFile,
} from "../../api/tracks";

/**
 * Represents the shape of the tracks slice state.
 */
interface TracksState {
  /** Array of track items fetched from the server */
  items: Track[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  /** Current page number for pagination */
  page: number;
  /** Number of items per page */
  limit: number;
  /** Total number of tracks across all pages */
  totalCount: number;
  /** Total number of pages available */
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

// Async thunk to fetch tracks with support for filtering, sorting, and pagination.

export const fetchTracks = createAsyncThunk<TracksResponse, TracksQueryParams>(
  "tracks/fetchTracks",
  async (params) => {
    return await getTracks(params);
  },
);

/**
 * Async thunk to create a new track.
 * After creation, it refetches the track list to include the new item.
 */
export const createTrack = createAsyncThunk<
  void,
  CreateTrackPayload,
  { dispatch: AppDispatch }
>("tracks/createTrack", async (payload, { dispatch }) => {
  await apiCreateTrack(payload);
  await dispatch(fetchTracks({}));
});

/**
 * Async thunk to edit an existing track.
 * Returns the updated track on success.
 */
export const editTrack = createAsyncThunk<Track, EditTrackPayload>(
  "tracks/editTrack",
  async (payload) => {
    const updated = await apiEditTrack(payload);
    return updated;
  },
);

/**
 * Async thunk to delete a single track by ID.
 * Performs an optimistic remove from the UI before server confirmation.
 */
export const deleteTrack = createAsyncThunk<string, string>(
  "tracks/deleteTrack",
  async (id) => {
    await apiDeleteTrack(id);
    return id;
  },
);

/**
 * Async thunk to upload an audio file for a specific track.
 * Returns the updated track including the new file reference.
 */
export const uploadTrackFile = createAsyncThunk<
  Track,
  { id: string; file: FormData }
>("tracks/uploadTrackFile", async ({ id, file }) => {
  const updated = await apiUploadTrackFile(id, file);
  return updated;
});

/**
 * Async thunk to remove the audio file from a specific track.
 * Returns the ID of the track that had its file removed.
 */
export const removeTrackFile = createAsyncThunk<string, string>(
  "tracks/removeTrackFile",
  async (id) => {
    await apiRemoveTrackFile(id);
    return id;
  },
);

/**
 * The tracks slice containing reducers and extraReducers for handling actions.
 */
const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending: set loading status
      .addCase(fetchTracks.pending, (state) => {
        state.status = "loading";
      })
      // Fulfilled: store fetched tracks and pagination info
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
        state.totalCount = action.payload.totalCount;
        state.totalPages = action.payload.totalPages;
      })
      // Rejected: store error message
      .addCase(fetchTracks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load tracks";
      })
      // Handle create pending for optimistic UI
      .addCase(createTrack.pending, (state, action) => {
        state.status = "loading";
        const tempId = "temp-" + Date.now();
        const newTrack: Track = {
          id: tempId,
          title: action.meta.arg.title,
          artist: action.meta.arg.artist,
          album: action.meta.arg.album,
          genres: action.meta.arg.genres,
          coverImage: action.meta.arg.coverImage || "",
          audioFile: "",
          slug: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        state.items.unshift(newTrack);
      })
      // Create fulfilled: remove temp items
      .addCase(createTrack.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = state.items.filter((t) => !t.id.startsWith("temp-"));
      })
      // Create rejected: remove temp and store error
      .addCase(createTrack.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Create track failed";
        state.items = state.items.filter((t) => !t.id.startsWith("temp-"));
      })
      // Edit fulfilled: update track in-place
      .addCase(editTrack.fulfilled, (state, action) => {
        const idx = state.items.findIndex((t) => t.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      // Delete pending: optimistic UI remove
      .addCase(deleteTrack.pending, (state, action) => {
        const id = action.meta.arg;
        state.items = state.items.filter((t) => t.id !== id);
      })
      // Delete rejected: log error (UI can handle rollback if needed)
      .addCase(deleteTrack.rejected, (state, action) => {
        console.error("Failed to delete track:", action.error.message);
      })
      // Upload file fulfilled: replace track with updated version
      .addCase(uploadTrackFile.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex((t) => t.id === updated.id);
        if (idx !== -1) state.items[idx] = updated;
      })
      // Remove file fulfilled: clear audioFile field
      .addCase(removeTrackFile.fulfilled, (state, action) => {
        const idx = state.items.findIndex((t) => t.id === action.payload);
        if (idx !== -1) state.items[idx].audioFile = "";
      });
  },
});

export default tracksSlice.reducer;
