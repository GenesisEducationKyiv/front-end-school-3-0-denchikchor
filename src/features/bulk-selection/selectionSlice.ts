import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

//Slice to manage selection mode and selected track IDs for bulk actions
interface SelectionState {
  selectionMode: boolean;
  selectedIds: string[];
}

const initialState: SelectionState = {
  selectionMode: false,
  selectedIds: [],
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    toggleSelectionMode(state) {
      state.selectionMode = !state.selectionMode;
      if (!state.selectionMode) {
        state.selectedIds = [];
      }
    },
    toggleTrackSelection(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((tid) => tid !== id);
      } else {
        state.selectedIds.push(id);
      }
    },
    selectAll(state, action: PayloadAction<string[]>) {
      state.selectedIds = action.payload;
    },
    clearSelection(state) {
      state.selectedIds = [];
    },
  },
});

export const {
  toggleSelectionMode,
  toggleTrackSelection,
  selectAll,
  clearSelection,
} = selectionSlice.actions;

// Selector to read selection mode flag 
export const selectSelectionMode = (state: RootState) => state.selection.selectionMode;
// Selector to read selected track IDs
export const selectSelectedIds    = (state: RootState) => state.selection.selectedIds;

export default selectionSlice.reducer;
