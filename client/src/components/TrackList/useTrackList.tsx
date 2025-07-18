import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux-hook";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { fetchTracks } from "../../features/tracks/trackSlice";
import type { TracksQueryParams } from "../../features/tracks/types";
import { useTrackSelection } from "../../hooks/useTrackSelection";
import { toast } from "react-toastify";
import ToastMessage from "../UI/ToastMessage/ToastMessage";
import { fetchGenres } from "../../features/genres/genresSlice";

export function useTrackList() {
  const dispatch = useAppDispatch();
  const { query: params, setParams } = useTrackQueryParams();

  const {
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    handleBulkDelete,
  } = useTrackSelection();

  useEffect(() => {
    dispatch(fetchGenres())
      .unwrap()
      .catch((err: Error) => {
        toast.error(
          <ToastMessage
            message={`Failed to load genres: ${err.message}`}
            type="error"
          />,
        );
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTracks(params))
      .unwrap()
      .catch((err: Error) => {
        toast.error(
          <ToastMessage
            message={`Failed to load tracks: ${err.message}`}
            type="error"
          />,
        );
      });
  }, [dispatch, params]);

  const onDelete = useCallback(
    (id: string) =>
      dispatch(fetchTracks(params))
        .unwrap()
        .then(() => {}),
    [dispatch, params],
  );

  return {
    params,
    setParams,
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    onBulkDelete: () => handleBulkDelete(selectedTracks, params),
    onDelete,
    onPageChange: (page: number) => setParams({ page }),
  };
}
