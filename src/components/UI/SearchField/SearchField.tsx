import React, { useEffect, useRef } from "react";
import styles from "./SearchInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchField: React.FC<Props> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = inputRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onChange("");
        el?.blur();
      }
    };
    el?.addEventListener("keydown", onKey);
    return () => el?.removeEventListener("keydown", onKey);
  }, [onChange]);

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by title, artist, or album"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        data-testid="search-input"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className={styles.clearButton}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchField;
