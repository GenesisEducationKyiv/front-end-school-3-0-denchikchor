import React, { useState } from "react";
import TrackForm from "../TrackForm/TrackForm";
import styles from "./TrackEditModal.module.css";
import { Track } from "../../features/tracks/types";
import { editTrack } from "../../features/tracks/trackSlice";
import { useAppDispatch } from "../../hooks/redux-hook";
import { toast } from "react-toastify";
import ConfirmDialog from "../UI/ConfirmDialog/ConfirmDialog";
import ToastMessage from "../UI/ToastMessage/ToastMessage";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import { TrackFormSchemaType, TrackFormSchema } from "../../schemas/track";

interface Props {
  track: Track;
  onClose: () => void;
  onDelete: (id: string) => void;
}

const TrackEditModal: React.FC<Props> = ({ track, onClose, onDelete }) => {
  const dispatch = useAppDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (data: TrackFormSchemaType) => {
    try {
      TrackFormSchema.parse(data);

      const trackData = {
        id: track.id,
        title: data.title,
        artist: data.artist,
        album: data.album ?? "",
        genres: data.genres,
        coverImage: data.coverImage ?? "",
      };
      await dispatch(editTrack(trackData));
      toast.success(
        <ToastMessage message="Track successfully updated!" type="success" />,
      );
      onClose();
    } catch (error) {
      console.error("Track editing error:", error);
      toast.error(
        <ToastMessage message="Error while editing track" type="error" />,
      );
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(track.id);
      toast.success(
        <ToastMessage
          message="Track deleted"
          type="success"
          data-testid="toast-delete-success"
        />,
      );
      onClose();
    } catch (err) {
      console.error("Delete error:", err);
      toast.error(<ToastMessage message="Error deleting track" type="error" />);
    }
  };

  return (
    <ModalWrapper onClose={onClose} aria-label="Edit track" aria-modal="true">
      <div className={styles.header}>
        <h2>Edit track</h2>
        <button
          type="button"
          onClick={() => setShowConfirm(true)}
          data-testid={`delete-track-${track.id}`}
          className={styles.deleteButton}
          aria-label="Delete track"
        >
          Delete track
        </button>
      </div>

      {showConfirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this track?"
          onConfirm={async () => {
            try {
              await handleDelete();
            } catch (err) {
              console.error("Delete error in ConfirmDialog:", err);
            }
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      <TrackForm
        initialValues={{
          title: track.title,
          artist: track.artist,
          album: track.album ?? "",
          genres: track.genres,
          coverImage: track.coverImage ?? "",
        }}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Save"
      />
    </ModalWrapper>
  );
};

export default TrackEditModal;
