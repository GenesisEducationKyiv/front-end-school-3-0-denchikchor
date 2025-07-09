import React from "react";
import styles from "./TrackItem.module.css";
import Dots from "../../assets/dots.svg?react";

interface Props {
  onEdit: () => void;
  showCheckbox?: boolean;
  checked?: boolean;
  onCheckboxChange?: () => void;
  trackId: string;
}

const TrackActions: React.FC<Props> = ({
  onEdit,
  showCheckbox,
  checked,
  onCheckboxChange,
  trackId,
}) => (
  <div className={styles.mainActions} aria-label="Track actions">
    <button onClick={onEdit} data-testid={`edit-track-${trackId}`} aria-label="Edit track">
      <Dots aria-hidden="true" className={styles.dots} />
    </button>
    {showCheckbox && (
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onCheckboxChange}
          className={styles.checkbox}
          aria-label={checked === true ? "Deselect track" : "Select track"}
        />
      </div>
    )}
  </div>
);

export default TrackActions;
