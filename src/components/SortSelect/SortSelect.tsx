import React from "react";
import styles from "./SortSelect.module.css";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";

const SortSelect: React.FC = () => {
  const { query: params, setParams } = useTrackQueryParams();
  const value = params.sort || "";
  const direction = params.order || "asc";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ sort: e.target.value as "" | "title" | "artist", page: 1 });
  };
  const handleToggleDirection = () => {
    setParams({ order: direction === "asc" ? "desc" : "asc", page: 1 });
  };

  return (
    <div className={styles.sortWrapper} role="region" aria-label="Sort tracks">
      <div className={styles.customSelectWrapper}>
        <select
          value={value}
          onChange={handleChange}
          className={styles.select}
          data-testid="sort-select"
          aria-label="Select property to sort by"
        >
          <option value="">Sorting</option>
          <option value="title">Name</option>
          <option value="artist">Artist</option>
        </select>
        <svg
          className={styles.arrow}
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <polyline points="1,1 6,6 11,1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <button 
        onClick={handleToggleDirection} 
        className={styles.toggleButton}
        aria-label={
        direction === "asc"
          ? "Change to descending order"
          : "Change to ascending order"
      }>
        {direction === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
};

export default SortSelect;
