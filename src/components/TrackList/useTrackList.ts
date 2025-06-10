import { useEffect, useState, useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux-hook";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { useDebounce } from "../../hooks/useDebounce";
import { useTrackSelection } from "../../hooks/useTrackSelection";
import { fetchGenres } from "../../features/genres/genresSlice";
import { deleteTrack, fetchTracks } from "../../features/tracks/trackSlice";

export function useTrackList(searchQuery: string) {
  const dispatch = useAppDispatch();
  const { query: params, setParam } = useTrackQueryParams();
  const debouncedSearch = useDebounce(searchQuery, 500);

  // bulk‐selection logic
  const selection = useTrackSelection();
  const onBulkDelete = useCallback(
    () => selection.handleBulkDelete(selection.selectedTracks, params),
    [selection, params],
  );

  // fetch genres once
  useEffect(() => {
    dispatch(fetchGenres()).unwrap().catch(console.error);
  }, [dispatch]);

  // sync external search → URL
  useEffect(() => {
    if (debouncedSearch !== params.search) {
      setParam("search", debouncedSearch || undefined);
      setParam("page", 1);
    }
  }, [debouncedSearch, params.search, setParam]);

  // fetch tracks whenever URL params change
  useEffect(() => {
    dispatch(fetchTracks(params)).unwrap().catch(console.error);
  }, [dispatch, params]);

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [params.page]);

  // single‐track deletion
  const onDelete = useCallback(
    (id: string) => dispatch(deleteTrack(id)).unwrap().catch(console.error),
    [dispatch],
  );

  // genre filter handler
  const onGenreChange = useCallback(
    (genre: string) => {
      setParam("genre", genre || undefined);
      setParam("page", 1);
    },
    [setParam],
  );

  // sort field handler
  const onSortChange = useCallback(
    (field: "" | "title" | "artist") => {
      setParam("sort", field);
      setParam(
        "order",
        params.sort === field && params.order === "asc" ? "desc" : "asc",
      );
      setParam("page", 1);
    },
    [params.sort, params.order, setParam],
  );

  // toggle sort direction
  const onDirectionToggle = useCallback(() => {
    setParam("order", params.order === "asc" ? "desc" : "asc");
    setParam("page", 1);
  }, [params.order, setParam]);

  // pagination handler
  const onPageChange = useCallback(
    (newPage: number) => setParam("page", newPage),
    [setParam],
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