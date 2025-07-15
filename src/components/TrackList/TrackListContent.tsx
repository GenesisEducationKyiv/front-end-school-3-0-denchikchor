import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import styles from "./TrackList.module.css";
import { Track } from "../../features/tracks/types";

interface Props {
  tracks: Track[];
}

const TrackListContent: React.FC<Props> = ({
  tracks,
}) => {
  if (tracks.length === 0) {
    return <p className={styles.noResults}>Nothing found</p>;
  }

  return (
    <ul className={`${styles.list} ${styles.fadeIn}`}>
      {tracks.map((track) => {
        return (
          <TrackItem track={track} key={track.id} />
        );
      })}
    </ul>
  );
};

export default TrackListContent;
