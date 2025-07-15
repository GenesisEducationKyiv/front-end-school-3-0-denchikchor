import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../hooks/redux-hook";
import { useTrackQueryParams } from "../../hooks/useTrackQueryParams";

import { createTrack } from "../../features/tracks/trackSlice";
import { selectCreateModalOpen, closeCreateModal } from "../../features/ui/modalSlice";
import TrackForm from "../TrackForm/TrackForm";
import ToastMessage from "../UI/ToastMessage/ToastMessage";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import { TrackFormSchema, TrackFormSchemaType } from "../../schemas/track";
import { RootState } from "../../store";

const TrackCreateModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const open = useSelector(selectCreateModalOpen);
  const tracks = useSelector((state: RootState) => state.tracks.items);
  const { setParams } = useTrackQueryParams();

  if (!open) return null;

  const handleSubmit = async (data: TrackFormSchemaType) => {
    const titleLower = data.title.trim().toLowerCase();
    const isDuplicate = tracks.some(
      (t) => t.title.trim().toLowerCase() === titleLower
    );
    if (isDuplicate) {
      toast.error("A track with that name already exists!");
      return;
    }
    try {
      TrackFormSchema.parse(data);
      const payload = {
        title: data.title,
        artist: data.artist,
        album: data.album ?? "",
        genres: data.genres,
        coverImage: data.coverImage ?? "",
      };
      await dispatch(createTrack(payload)).unwrap();
      // after create, reset page to 1
      setParams({ page: 1 });
      dispatch(closeCreateModal());
      toast.success(
        <ToastMessage message="Track successfully added!" type="success" />
      );
    } catch (err) {
      console.error(err);
      toast.error(
        <ToastMessage message="Failed to create track" type="error" />
      );
    }
  };

  return (
    <ModalWrapper onClose={() => dispatch(closeCreateModal())} aria-label="Create a new track" aria-modal="true">
      <h2 data-testid="tracks-header">Create a new track</h2>
      <TrackForm submitLabel="Create" onSubmit={handleSubmit} onCancel={() => dispatch(closeCreateModal())} />
    </ModalWrapper>
  );
};

export default TrackCreateModal;
