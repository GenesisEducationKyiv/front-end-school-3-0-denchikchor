import React from "react";
import Pagination from "../Pagination/Pagination";
import styles from "./TrackList.module.css";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const TrackListPagination: React.FC = () => {
  const { query: params, setParams } = useTrackQueryParams();
  const currentPage = params.page ?? 1;
  const totalPages = useSelector((state: RootState) => state.tracks.totalPages);

  const handlePageChange = (page: number) => {
  setParams({ page });
  window.scrollTo({ top: 0 });
};

  return (
    <div className={styles.paginationWrapper}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TrackListPagination;
