import { useAppDispatch } from "./redux-hook";
import { deleteTrack, fetchTracks } from "../features/tracks/trackSlice";
import {
  toggleSelectionMode,
  toggleTrackSelection,
  selectSelectionMode,
  selectSelectedIds,
  clearSelection,
  selectAll as selectAllTracksIds,
} from "../features/bulk-selection/selectionSlice";
import type { TracksQueryParams } from "../features/tracks/types";
import { useSelector } from "react-redux";

// Hook for managing bulk selection and deletion of tracks via Redux state.
export const useTrackSelection = () => {
  const dispatch = useAppDispatch();

  // Read selection mode and selected IDs from Redux
  const selectionMode = useSelector(selectSelectionMode);
  const selectedTracks = useSelector(selectSelectedIds);

  // Toggle selection mode on/off
  const onToggleSelectionMode = () => {
    dispatch(toggleSelectionMode());
  };

  // Toggle a single track selection
  const onToggleTrackSelection = (id: string) => {
    dispatch(toggleTrackSelection(id));
  };

  // Select all provided IDs
  const onSelectAll = (ids: string[]) => {
    dispatch(selectAllTracksIds(ids));
  };

  // Bulk delete selected tracks and refetch
  const onBulkDelete = async (ids: string[], params: TracksQueryParams) => {
    // Delete each track
    await Promise.all(ids.map((id) => dispatch(deleteTrack(id)).unwrap()));
    // Refetch tracks
    await dispatch(fetchTracks(params))
      .unwrap()
      .catch((err) => console.error(err));
    // Clear selection and exit selection mode
    dispatch(clearSelection());
    dispatch(toggleSelectionMode());
  };

  return {
    selectionMode,
    selectedTracks,
    toggleSelectionMode: onToggleSelectionMode,
    toggleTrackSelection: onToggleTrackSelection,
    handleSelectAll: onSelectAll,
    handleBulkDelete: onBulkDelete,
  };
};
