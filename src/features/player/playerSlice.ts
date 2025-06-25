import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { selectAllTracks } from "../tracks/trackSlice";

interface PlayerState {
  activeTrackId: string | null;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  activeTrackId: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    togglePlay(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      if (state.activeTrackId === id) {
        state.isPlaying = !state.isPlaying;
      } else {
        state.activeTrackId = id;
        state.isPlaying = true;
      }
    },
    trackEnded(state, action: PayloadAction<{ id: string }>) {
      if (state.activeTrackId === action.payload.id) {
        state.isPlaying = false;
      }
    },
  },
});

export const { togglePlay, trackEnded } = playerSlice.actions;

export const selectActiveTrackId = (state: RootState) => state.player.activeTrackId;
export const selectIsPlaying     = (state: RootState) => state.player.isPlaying;

//Async thunk to play next track based on current playlist order
export const playNext = createAsyncThunk<
  void,
  void,
  { state: RootState }
>(
  "player/playNext",
  async (_, { getState, dispatch }) => {
    const state = getState();
    const tracks = selectAllTracks(state);
    const ids = tracks.map((t) => t.id);
    const currentId = state.player.activeTrackId;
    const idx = ids.findIndex((id) => id === currentId);
    if (idx >= 0 && idx + 1 < ids.length) {
      dispatch(togglePlay({ id: ids[idx + 1] }));
    } else if (currentId) {
      dispatch(trackEnded({ id: currentId }));
    }
  },
);

export default playerSlice.reducer;
