import React, { useEffect, useState } from 'react';
import styles from './TrackList.module.css';
import { deleteTrack, fetchTracks } from '../../features/tracks/trackSlice';
import { useAppDispatch } from '../../hooks/redux-hook';
import Preloader from '../Preloader/Preloader';
import TrackListControls from './TrackListControls';
import TrackListContent from './TrackListContent';
import TrackListPagination from './TrackListPagination';
import { Track, TracksQueryParams } from '../../features/tracks/types';
import { useTracks } from '../../hooks/useTracks';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchGenres } from '../../features/genres/genresSlice';
import { useTrackSelection } from '../../hooks/useTrackSelection';
import { useDebounce } from '../../hooks/useDebounce';
import TrackBulkActions from '../TrackBulkActions/TrackBulkActions';

/**
 * Props for the TrackList component
 * @param onEditTrack - callback to open edit modal for a track
 * @param searchQuery - external search string (optional)
 * @param forceGoToFirstPage - flag to reset to first page when search changes
 * @param setForceGoToFirstPage - setter for forceGoToFirstPage flag
 */
interface Props {
  onEditTrack: (track: Track) => void;
  searchQuery: string;
  forceGoToFirstPage: boolean;
  setForceGoToFirstPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrackList: React.FC<Props> = ({
  onEditTrack,
  searchQuery,
  forceGoToFirstPage,
  setForceGoToFirstPage,
}) => {
  const dispatch = useAppDispatch();
  // Select paginated track data and metadata from Redux state
  const { items, status, page, limit, totalCount, totalPages, error } = useTracks();
  // Select available genres from Redux state
  const { items: genres, status: genresStatus } = useSelector((s: RootState) => s.genres);
  // Debounce external search input
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Hook for managing bulk selection and deletion
  const {
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    handleBulkDelete,
  } = useTrackSelection();

  // Wrapper to pass current params to bulk delete
  const onBulkDelete = () => handleBulkDelete(selectedTracks, params);

  // Fetch genres list on mount
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  // Unified local state for all query parameters
  const [params, setParams] = useState<TracksQueryParams>({
    page: 1,
    limit: 10,
    sort: '',
    order: 'asc',
    // search and genre will be added later
  });

  // Fetch track list whenever params change
  useEffect(() => {
    dispatch(fetchTracks(params));
  }, [dispatch, params]);

  // Reset to first page when external search flag triggers
  useEffect(() => {
    if (forceGoToFirstPage) {
      setParams(p => ({ ...p, page: 1 }));
      window.scrollTo({ top: 0 });
      setForceGoToFirstPage(false);
    }
  }, [forceGoToFirstPage, setForceGoToFirstPage]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [params.page]);

  // Update search param when debounced search changes
  useEffect(() => {
    setParams(p => ({
      ...p,
      search: debouncedSearch || undefined,
      page: 1,
    }));
  }, [debouncedSearch]);

  /** Delete a single track by ID */
  const handleDelete = (id: string) => {
    dispatch(deleteTrack(id));
  };

  /** Handler for search input change */
  const handleSearchChange = (value: string) =>
    setParams(p => ({ ...p, search: value || undefined, page: 1 }));

  /** Handler for genre filter change */
  const handleGenreChange = (genre: string) =>
    setParams(p => ({ ...p, genre: genre || undefined, page: 1 }));

  /** Handler for sort field change */
  const handleSortChange = (field: '' | 'title' | 'artist') =>
    setParams(p => ({
      ...p,
      sort: field,
      order: p.sort === field && p.order === 'asc' ? 'desc' : 'asc',
      page: 1,
    }));

  /** Handler to toggle sort direction */
  const handleDirectionToggle = () =>
    setParams(p => ({ ...p, order: p.order === 'asc' ? 'desc' : 'asc', page: 1 }));

  /** Handler for pagination page change */
  const handlePageChange = (newPage: number) =>
    setParams(p => ({ ...p, page: newPage }));

  // State for tracking which track is playing globally (index within items)
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);

  /**
   * When a track ends, play the next track in the current page or stop
   * @param localIndex - position of the ended track in the current items array
   */
  const handleTrackEnd = (localIndex: number) => {
    if (localIndex + 1 < items.length) {
      setCurrentPlayingIndex(localIndex + 1);
    } else {
      setCurrentPlayingIndex(null);
    }
  };

  return (
    <div className={styles.trackList}>
      {status === 'loading' && items.length === 0 && <Preloader />}
      {status === 'failed' && <p>Error: {error}</p>}

      {items.length > 0 && (
        <>
          {/* Controls for sorting, filtering, and searching */}
          <TrackListControls
            sortBy={(params.sort ?? '') as '' | 'title' | 'artist'}
            sortDirection={params.order ?? 'asc'}
            onSortChange={handleSortChange}
            onToggleDirection={handleDirectionToggle}
            selectedGenre={params.genre ?? ''}
            onGenreChange={handleGenreChange}
            genres={genres}
            setCurrentPage={handlePageChange}
          />

          {/* Bulk selection and deletion actions */}
          <TrackBulkActions
            selectionMode={selectionMode}
            selectedCount={selectedTracks.length}
            totalCount={items.length}
            onToggleMode={toggleSelectionMode}
            onSelectAll={() => handleSelectAll(items.map(t => t.id))}
            onBulkDelete={onBulkDelete}
          />

          {/* Track list with player and actions */}
          <TrackListContent
            tracks={items}
            startIndex={(params.page! - 1) * limit}
            currentPlayingIndex={currentPlayingIndex}
            setCurrentPlayingIndex={setCurrentPlayingIndex}
            onEditTrack={onEditTrack}
            onDeleteTrack={handleDelete}
            onTrackEnd={handleTrackEnd}
            selectionMode={selectionMode}
            selectedTracks={selectedTracks}
            toggleTrackSelection={toggleTrackSelection}
          />

          {/* Pagination controls */}
          <TrackListPagination
            currentPage={params.page!}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default TrackList;
