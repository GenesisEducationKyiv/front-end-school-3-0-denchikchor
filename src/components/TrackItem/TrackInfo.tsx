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
    <div className={styles.title} data-testid={`track-item-${id}-title`}  aria-label={title}>
      {title}
    </div>
    <div className={styles.artist} data-testid={`track-item-${id}-artist`} aria-label={artist}>
      {artist}
    </div>
    <div className={styles.album}>
      <span className={styles.sronly}>Album: </span>
      {album}
    </div>
    <div className={styles.genres} aria-label={`Genres: ${genres.join(", ")}`}>
      {genres.map((g) => (
        <span key={g} className={styles.genre}>
          {g}
        </span>
      ))}
    </div>
  </div>
);
};

export default TrackInfo;
