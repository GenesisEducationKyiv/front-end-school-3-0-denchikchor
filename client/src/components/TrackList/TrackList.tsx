import React from "react";
import styles from "./TrackList.module.css";
import Preloader from "../Preloader/Preloader";
import TrackListControls from "./TrackListControls";
import TrackListContent from "./TrackListContent";
import TrackListPagination from "./TrackListPagination";
import { useTracks } from "../../hooks/useTracks";
import TrackBulkActions from "../TrackBulkActions/TrackBulkActions";
import { useTrackList } from "./useTrackList";

const TrackList: React.FC = () => {
  useTrackList();

  const { items, status, error } = useTracks();

  return (
    <div className={styles.trackList}>
      {status === "loading" && items.length === 0 && <Preloader />}
      {status === "failed" && <p>Error: {error}</p>}

      {items.length > 0 && (
        <>
          <TrackListControls />
          <TrackBulkActions />
          <TrackListContent tracks={items} />
          <TrackListPagination />
        </>
      )}
    </div>
  );
};

export default TrackList;
