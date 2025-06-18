import { useEffect, useState, useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux-hook";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { useDebounce } from "../../hooks/useDebounce";
import { useTrackSelection } from "../../hooks/useTrackSelection";
import { fetchGenres } from "../../features/genres/genresSlice";
import { deleteTrack, fetchTracks } from "../../features/tracks/trackSlice";
import { toast } from "react-toastify";
import ToastMessage from "../UI/ToastMessage/ToastMessage";

export function useTrackList(searchQuery: string) {
  const dispatch = useAppDispatch();
  const { query: params, setParams } = useTrackQueryParams();
  const debouncedSearch = useDebounce(searchQuery, 500);

  // bulk‐selection logic
  const selection = useTrackSelection();
  const onBulkDelete = useCallback(
    () => selection.handleBulkDelete(selection.selectedTracks, params),
    [selection, params],
  );

  // fetch genres once
  useEffect(() => {
    dispatch(fetchGenres())
      .unwrap()
      .catch((err: Error) => {
        toast.error(
          <ToastMessage
            message={`Failed to load genres: ${err.message}`}
            type="error"
          />
        );
      });
  }, [dispatch]);

  // sync external search → URL
  useEffect(() => {
    if (debouncedSearch !== params.search) {
      setParams({ search: debouncedSearch || undefined, page: 1 });
    }
  }, [debouncedSearch, params.search, setParams]);

  // fetch tracks whenever URL params change
  useEffect(() => {
    dispatch(fetchTracks(params)).unwrap().catch((err: Error) => {
        toast.error(
          <ToastMessage
            message={`Failed to load tracks: ${err.message}`}
            type="error"
          />
        );
      });
  }, [dispatch, params]);

  // scroll to top on page change
  useEffect(() => {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
  }
  }, [params.page]);

  // single‐track deletion
  const onDelete = useCallback(
    (id: string) => dispatch(deleteTrack(id)).unwrap(),
    [dispatch],
  );

  // genre filter handler
  const onGenreChange = useCallback(
    (genre: string) => {
      setParams({genre: genre || undefined, page: 1});
    },
    [setParams],
  );

  // sort field handler
  const onSortChange = useCallback(
    (field: "" | "title" | "artist") => {
      setParams({
      sort: field,
      order: params.sort === field && params.order === "asc" ? "desc" : "asc",
      page: 1,
    });
    },
    [params.sort, params.order, setParams],
  );

  // toggle sort direction
  const onDirectionToggle = useCallback(() => {
    setParams({order: params.order === "asc" ? "desc" : "asc", page: 1});
  }, [params.order, setParams]);

  // pagination handler
  const onPageChange = useCallback(
    (newPage: number) => setParams({page: newPage}),
    [setParams],
  );

  return {
    params,
    debouncedSearch,
    selectionMode: selection.selectionMode,
    selectedTracks: selection.selectedTracks,
    toggleSelectionMode: selection.toggleSelectionMode,
    toggleTrackSelection: selection.toggleTrackSelection,
    handleSelectAll: selection.handleSelectAll,
    onBulkDelete,
    onDelete,
    onGenreChange,
    onSortChange,
    onDirectionToggle,
    onPageChange,
  };
}