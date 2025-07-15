import React from "react";
import styles from "./TrackFilters.module.css";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const TrackFilters: React.FC = () => {
  const { query: params, setParams } = useTrackQueryParams();
  const genres = useSelector((state: RootState) => state.genres.items);
  const selectedGenre = params.genre || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ genre: e.target.value || undefined, page: 1 });
  };

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.customSelectWrapper}>
        <select
          value={selectedGenre}
          aria-label="Genre"
          onChange={handleChange}
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
          <polyline points="1,1 6,6 11,1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default TrackFilters;
