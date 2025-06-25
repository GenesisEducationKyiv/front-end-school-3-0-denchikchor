import React from "react";
import styles from "./TrackItem.module.css";
import Dots from "../../assets/dots.svg?react";
import { useAppDispatch } from "../../hooks/redux-hook";
import { useSelector } from "react-redux";
import {
  selectSelectionMode,
  selectSelectedIds,
  toggleTrackSelection,
} from "../../features/bulk-selection/selectionSlice";
import { openEditModal } from "../../features/ui/modalSlice";

interface Props {
  trackId: string;
}

const TrackActions: React.FC<Props> = ({ trackId }) => {
  const dispatch = useAppDispatch();
  const selectionMode = useSelector(selectSelectionMode);
  const selectedIds = useSelector(selectSelectedIds);
  const isChecked = selectedIds.includes(trackId);

  const handleEdit = () => {
    dispatch(openEditModal(trackId));
  };

  const handleCheckbox = () => {
    dispatch(toggleTrackSelection(trackId));
  };

  return (
    <div className={styles.mainActions}>
      <button onClick={handleEdit} data-testid={`edit-track-${trackId}`}>
        <Dots className={styles.dots} />
      </button>
      {selectionMode && (
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
            className={styles.checkbox}
          />
        </div>
      )}
    </div>
  );
};

export default TrackActions;
