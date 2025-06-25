import React, { useState } from "react";
import styles from "./TrackBulkActions.module.css";
import ConfirmDialog from "../UI/ConfirmDialog/ConfirmDialog";
import { toast } from "react-toastify";
import ToastMessage from "../UI/ToastMessage/ToastMessage";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { selectAllTracks, deleteTrack, fetchTracks } from "../../features/tracks/trackSlice";
import { useTrackSelection } from "../../hooks/useTrackSelection";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";

const TrackBulkActions: React.FC = () => {
  const { query: params } = useTrackQueryParams();

  const {
    selectionMode,
    selectedTracks,
    toggleSelectionMode,
    handleSelectAll,
    handleBulkDelete,
  } = useTrackSelection();

  // Total count of tracks
  const allTracks = useSelector((state: RootState) => selectAllTracks(state));
  const totalCount = allTracks.length;

  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      await handleBulkDelete(selectedTracks, params);
      toast.success(
        <ToastMessage message="Tracks deleted successfully" type="success" />,
      );
    } catch (err) {
      console.error("Failed to delete tracks", err);
      toast.error(
        <ToastMessage message="Failed to delete tracks" type="error" />,
      );
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={toggleSelectionMode}
        className={styles.button}
        data-testid="toggle-selection-mode"
      >
        {selectionMode ? "Cancel" : "Bulk select"}
      </button>

      {selectionMode && (
        <div className={styles.controls}>
          <span data-testid="selection-count">
            Selected: {selectedTracks.length} / {totalCount}
          </span>
          <button
            onClick={() => handleSelectAll(allTracks.map((t) => t.id))}
            className={styles.button}
            data-testid="select-all"
          >
            Select all
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            disabled={selectedTracks.length === 0}
            aria-disabled={selectedTracks.length === 0}
            data-testid="delete-selected"
            className={styles.dangerButton}
          >
            Delete selected
          </button>

          {showConfirm && (
            <ConfirmDialog
              message="Are you sure you want to delete these tracks?"
              onConfirm={handleConfirmDelete}
              onCancel={() => setShowConfirm(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TrackBulkActions;
