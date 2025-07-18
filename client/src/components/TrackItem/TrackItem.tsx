import React from "react";
import styles from "./TrackItem.module.css";
import { Track } from "../../features/tracks/types";
import TrackCover from "./TrackCover";
import TrackInfo from "./TrackInfo";
import TrackPlayer from "./TrackPlayer";
import TrackActions from "./TrackActions";

interface Props {
  track: Track;
}

const TrackItem: React.FC<Props> = ({ track }) => {
  return (
    <li className={styles.trackItem} data-testid={`track-item-${track.id}`}>
      <div className={styles.trackInfo}>
        <TrackCover src={track.coverImage} alt={track.title} />
        <TrackInfo id={track.id} />
      </div>
      <TrackPlayer trackId={track.id} />
      <TrackActions trackId={track.id} />
    </li>
  );
};

export default TrackItem;
