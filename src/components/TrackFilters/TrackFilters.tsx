import React from "react";
import styles from "./TrackFilters.module.css";

interface Props {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (value: string) => void;
  setCurrentPage: (page: number) => void;
}

const TrackFilters: React.FC<Props> = ({
  genres,
  selectedGenre,
  onGenreChange,
  setCurrentPage,
}) => {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.customSelectWrapper}>
        <select
          value={selectedGenre}
          aria-label="Genre"
          onChange={(e) => {
            onGenreChange(e.target.value);
            setCurrentPage(1);
          }}
          className={styles.select}
          data-testid="filter-genre"
        >
          <option value="">All genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <svg
          className={styles.arrow}
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="1,1 6,6 11,1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default TrackFilters;
