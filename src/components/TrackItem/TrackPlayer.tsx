import React from "react";
import { useSelector } from "react-redux";
import styles from "./TrackItem.module.css";
import CustomAudioPlayer from "../CustomAudioPlayer/CustomAudioPlayer";
import TrackUpload from "../TrackUpload/TrackUpload";
import { API_BASE } from "../../api/config";
import type { RootState } from "../../store";
import { selectTrackById } from "../../features/tracks/trackSlice";
import {
  togglePlay,
  playNext,
  selectActiveTrackId,
  selectIsPlaying,
} from "../../features/player/playerSlice";
import { useAppDispatch } from "../../hooks/redux-hook";
interface Props {
  trackId: string;
}

const TrackPlayer: React.FC<Props> = ({ trackId }) => {
  const dispatch = useAppDispatch();

  // Select track data
  const track = useSelector((state: RootState) =>
    selectTrackById(state, trackId),
  );
  const audioFile = track?.audioFile;
  const updatedAt = track?.updatedAt ?? "";

  // Select player state
  const activeTrackId = useSelector((state: RootState) =>
    selectActiveTrackId(state),
  );
  const isPlaying = useSelector((state: RootState) => selectIsPlaying(state));
  const isActive = activeTrackId === trackId && isPlaying;

  // Handlers
  const handleTogglePlay = () => dispatch(togglePlay({ id: trackId }));
  const handleTrackEnd = () => dispatch(playNext());

  return (
    <div className={styles.player}>
      <div className={styles.audioWrapper}>
        {audioFile !== undefined && (
          <CustomAudioPlayer
            src={`${API_BASE}/files/${audioFile}?v=${updatedAt}`}
            isActive={isActive}
            onTogglePlay={handleTogglePlay}
            onEndedNext={handleTrackEnd}
          />
        )}
      </div>
      <div className={styles.actions}>
        <TrackUpload trackId={trackId} />
      </div>
    </div>
  );
};

export default TrackPlayer;
