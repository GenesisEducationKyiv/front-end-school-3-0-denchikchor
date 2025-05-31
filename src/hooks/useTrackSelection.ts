import { useState } from "react";
import { useAppDispatch } from "./redux-hook";
import { deleteTrack, fetchTracks } from "../features/tracks/trackSlice";
import { TracksQueryParams } from "../features/tracks/types";

/**
 * Custom hook for managing bulk selection and deletion of tracks.
 * Provides selection mode state, selected track IDs, and handlers to toggle selection,
 * select all, and perform bulk deletion with re-fetching.
 */
export const useTrackSelection = () => {
  const dispatch = useAppDispatch();

  // Flag to determine if bulk selection mode is active
  const [selectionMode, setSelectionMode] = useState(false);
  // Array of selected track IDs
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);

  /**
   * Toggle bulk selection mode on or off.
   * When toggling off, clear any selected tracks.
   */
  const toggleSelectionMode = () => {
    setSelectionMode((prev) => !prev);
    setSelectedTracks([]);
  };

  /**
   * Toggle selection for a single track ID.
   * If already selected, unselect it; otherwise, add to selection.
   */
  const toggleTrackSelection = (id: string) => {
    setSelectedTracks((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id],
    );
  };

  /**
   * Select all given track IDs.
   */
  const handleSelectAll = (ids: string[]) => {
    setSelectedTracks(ids);
  };

  /**
   * Delete multiple selected tracks and re-fetch the list with the same query parameters.
   * @param selectedIds - array of track IDs to delete
   * @param params - current query parameters for fetching tracks
   */
  const handleBulkDelete = async (
    selectedIds: string[],
    params: TracksQueryParams,
  ) => {
    // Perform deletion for each selected track
    await Promise.all(selectedIds.map((id) => dispatch(deleteTrack(id))));
    // Re-fetch tracks with existing query parameters
    await dispatch(fetchTracks(params))
      .unwrap()
      .catch((error) => console.error("Failed to fetch tracks:", error));
    // Reset selection state
    setSelectedTracks([]);
    setSelectionMode(false);
  };

  return {
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    handleBulkDelete,
  };
};
