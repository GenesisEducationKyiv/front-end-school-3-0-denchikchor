import React from "react";
import styles from "./Pagination.module.css";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className={styles.pagination} data-testid="pagination">
      <button
        type="button"
        className={styles.button}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
      >
        ⏮ Fitst
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        data-testid="pagination-prev"
        aria-label="Go to previous page"
      >
        ← Back
      </button>

      <span className={styles.pageInfo}>
        Page {currentPage} from {totalPages}
      </span>

      <button
        type="button"
        className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        data-testid="pagination-next"
        aria-label="Go to next page"
      >
        Forward →
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
      >
        The last ⏭
      </button>
    </div>
  );
};

export default Pagination;
