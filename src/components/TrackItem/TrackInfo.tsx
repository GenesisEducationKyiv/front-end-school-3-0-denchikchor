import React from "react";
import styles from "./TrackItem.module.css";
import { useSelector } from "react-redux";
import { selectTrackById } from "../../features/tracks/trackSlice";
import type { RootState } from "../../store";

interface Props { id: string; }


const TrackInfo: React.FC<Props> = ({ id }) => {
const track = useSelector((state: RootState) => selectTrackById(state, id));
  if (!track) return null;

  return(
  <div className={styles.info}>
    <div className={styles.title} data-testid={`track-item-${id}-title`}>
      {track.title}
    </div>
    <div className={styles.artist} data-testid={`track-item-${id}-artist`}>
      {track.artist}
    </div>
    <div className={styles.album}>{track.album}</div>
    <div className={styles.genres}>
      {track.genres.map((g) => (
        <span key={g} className={styles.genre}>
          {g}
        </span>
      ))}
    </div>
  </div>
);
};

export default TrackInfo;
