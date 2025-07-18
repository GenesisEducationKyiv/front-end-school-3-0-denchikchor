import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./features/tracks/trackSlice";
import genresReducer from "./features/genres/genresSlice";
import playerReducer from "./features/player/playerSlice";
import selectionReducer from "./features/bulk-selection/selectionSlice";
import modalReducer from "./features/ui/modalSlice";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    genres: genresReducer,
    player: playerReducer,
    selection: selectionReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
