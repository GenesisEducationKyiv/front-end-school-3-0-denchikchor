import React, { useEffect, useState } from "react";
import styles from "./TrackList.module.css";
import Preloader from "../Preloader/Preloader";
import TrackListControls from "./TrackListControls";
import TrackListContent from "./TrackListContent";
import TrackListPagination from "./TrackListPagination";
import { Track } from "../../features/tracks/types";
import { useTracks } from "../../hooks/useTracks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TrackBulkActions from "../TrackBulkActions/TrackBulkActions";
import { useTrackList } from "./useTrackList";

interface Props {
  onEditTrack: (track: Track) => void;
  searchQuery: string;
  forceGoToFirstPage: boolean;
  setForceGoToFirstPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrackList: React.FC<Props> = ({ onEditTrack, searchQuery }) => {
  // Select paginated track data and metadata from Redux state
  const { items, status, limit, totalPages, error } = useTracks();

  const {
    params,
    onDelete,
    onGenreChange,
    onSortChange,
    onDirectionToggle,
    onPageChange,
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    toggleTrackSelection,
    handleSelectAll,
    onBulkDelete,
  } = useTrackList(searchQuery);
  // Select available genres from Redux state
  const { items: genres } = useSelector((s: RootState) => s.genres);

  // State for tracking which track is playing globally (index within items)
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null,
  );

  const handleTrackEnd = (localIndex: number) => {
    if (localIndex + 1 < items.length) {
      setCurrentPlayingIndex(localIndex + 1);
    } else {
      setCurrentPlayingIndex(null);
    }
  };

  return (
    <div className={styles.trackList}>
      {status === "loading" && items.length === 0 && <Preloader />}
      {status === "failed" && <p>Error: {error}</p>}

      {items.length > 0 && (
        <>
          {/* Controls for sorting, filtering, and searching */}
          <TrackListControls
            sortBy={params.sort ?? ""}
            sortDirection={params.order ?? "asc"}
            onSortChange={onSortChange}
            onToggleDirection={onDirectionToggle}
            selectedGenre={params.genre ?? ""}
            onGenreChange={onGenreChange}
            genres={genres}
            setCurrentPage={onPageChange}
          />

          <TrackBulkActions
            selectionMode={selectionMode}
            selectedCount={selectedTracks.length}
            totalCount={items.length}
            onToggleMode={toggleSelectionMode}
            onSelectAll={() => handleSelectAll(items.map((t) => t.id))}
            onBulkDelete={onBulkDelete}
          />

          <TrackListContent
            tracks={items}
            startIndex={((params.page ?? 1) - 1) * limit}
            currentPlayingIndex={currentPlayingIndex}
            setCurrentPlayingIndex={setCurrentPlayingIndex}
            onEditTrack={onEditTrack}
            onDeleteTrack={onDelete}
            onTrackEnd={handleTrackEnd}
            selectionMode={selectionMode}
            selectedTracks={selectedTracks}
            toggleTrackSelection={toggleTrackSelection}
          />

          <TrackListPagination
            currentPage={params.page ?? 1}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
};

export default TrackList;