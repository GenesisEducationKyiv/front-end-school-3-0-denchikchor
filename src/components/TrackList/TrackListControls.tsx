import React from "react";
import SortSelect from "../SortSelect/SortSelect";
import TrackFilters from "../TrackFilters/TrackFilters";
import styles from "./TrackList.module.css";

interface Props {
  sortBy: "" | "title" | "artist";
  sortDirection: "asc" | "desc";
  onSortChange: (field: "" | "title" | "artist") => void;
  onToggleDirection: () => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
  setCurrentPage: (page: number) => void;
}

const TrackListControls: React.FC<Props> = ({
  sortBy,
  sortDirection,
  onSortChange,
  onToggleDirection,
  selectedGenre,
  onGenreChange,
  genres,
  setCurrentPage,
}) => {
  return (
    <div className={styles.controls}>
      <SortSelect
        value={sortBy}
        onChange={onSortChange}
        direction={sortDirection}
        onToggleDirection={onToggleDirection}
      />
      <TrackFilters
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={onGenreChange}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TrackListControls;
