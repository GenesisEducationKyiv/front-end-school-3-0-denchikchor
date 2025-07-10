import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../hooks/redux-hook";

import { selectEditTrackId, closeEditModal } from "../../features/ui/modalSlice";
import { selectTrackById, editTrack, deleteTrack } from "../../features/tracks/trackSlice";
import TrackForm from "../TrackForm/TrackForm";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import ConfirmDialog from "../UI/ConfirmDialog/ConfirmDialog";
import ToastMessage from "../UI/ToastMessage/ToastMessage";
import { TrackFormSchema, TrackFormSchemaType } from "../../schemas/track";
import type { RootState } from "../../store";

import styles from "./TrackEditModal.module.css";


const TrackEditModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const editTrackId = useSelector(selectEditTrackId);
  const track = useSelector((state: RootState) => {
    if (editTrackId !== null && editTrackId !== "") {
      return selectTrackById(state, editTrackId);
    }
    return null;
  });
  const [showConfirm, setShowConfirm] = useState(false);

  if (!track) return null;

  const handleSubmit = async (data: TrackFormSchemaType) => {
    try {
      TrackFormSchema.parse(data);
      const payload = {
        id: track.id,
        title: data.title,
        artist: data.artist,
        album: data.album ?? "",
        genres: data.genres,
        coverImage: data.coverImage ?? "",
      };
      await dispatch(editTrack(payload)).unwrap();
      toast.success(
        <ToastMessage message="Track successfully updated!" type="success" />
      );
      dispatch(closeEditModal());
    } catch (err) {
      console.error(err);
      toast.error(
        <ToastMessage message="Error while editing track" type="error" />
      );
    }
  };

  const handleDelete = async () => {
    await dispatch(deleteTrack(track.id)).unwrap();
    toast.success(
      <ToastMessage message="Track deleted" type="success" />
    );
    dispatch(closeEditModal());
  };

  return (
    <ModalWrapper onClose={() => dispatch(closeEditModal())}>
      <div className={styles.header}>
        <h2>Edit track</h2>
        <button
        onClick={() => setShowConfirm(true)}
        data-testid={`delete-track-${track.id}`}
        className={styles.deleteButton}
      >
        Delete track
      </button>
      </div>

      {showConfirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this track?"
          onConfirm={async () => {
            await handleDelete();
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
        onCancel={() => dispatch(closeEditModal())}
        submitLabel="Save"
      />
    </ModalWrapper>
  );
};

export default TrackEditModal;
