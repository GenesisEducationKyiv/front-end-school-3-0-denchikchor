import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

//UI state for modals: edit track ID and create-track modal open flag.
interface ModalState {
  editTrackId: string | null;
  createModalOpen: boolean;
}

const initialState: ModalState = {
  editTrackId: null,
  createModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    //Open the edit modal for a given track ID.
    openEditModal(state, action: PayloadAction<string>) {
      state.editTrackId = action.payload;
    },
    //Close the edit modal.
    closeEditModal(state) {
      state.editTrackId = null;
    },
    //Open the create-track modal.
    openCreateModal(state) {
      state.createModalOpen = true;
    },
    //Close the create-track modal.
    closeCreateModal(state) {
      state.createModalOpen = false;
    },
  },
});

export const {
  openEditModal,
  closeEditModal,
  openCreateModal,
  closeCreateModal,
} = modalSlice.actions;

// Selector to get the currently editing track ID (or null if closed).
export const selectEditTrackId = (state: RootState) => state.modal.editTrackId;
//Selector to get create-track modal open flag.
export const selectCreateModalOpen = (state: RootState) =>
  state.modal.createModalOpen;

export default modalSlice.reducer;
