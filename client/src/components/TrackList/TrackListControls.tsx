import React from "react";
import styles from "./TrackList.module.css";
import SortSelect from "../SortSelect/SortSelect";
import TrackFilters from "../TrackFilters/TrackFilters";

const TrackListControls: React.FC = () => {
  return (
    <div className={styles.controls}>
      <SortSelect />
      <TrackFilters />
    </div>
  );
};

export default TrackListControls;
