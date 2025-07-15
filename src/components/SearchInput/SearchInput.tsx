import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.css";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { useDebounce } from "../../hooks/useDebounce";

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { query: params, setParams } = useTrackQueryParams();

  const [local, setLocal] = useState(params.search ?? "");
  const debouncedLocal = useDebounce(local, 500);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setParams({ search: debouncedLocal || undefined, page: 1 });
  }, [debouncedLocal, setParams]);

  useEffect(() => {
    const el = inputRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLocal("");
        el?.blur();
      }
    };
    el?.addEventListener("keydown", onKey);
    return () => el?.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by title, artist, or album"
        aria-label="Search by title, artist, or album"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={styles.input}
        data-testid="search-input"
      />
      {local && (
        <button
          type="button"
          onClick={() => setLocal("")}
          className={styles.clearButton}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchInput;
