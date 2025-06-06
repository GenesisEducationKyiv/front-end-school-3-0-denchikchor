import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../../api/genres";
import { ApiError } from "../../api/apiErrors";

export const fetchGenres = createAsyncThunk<
  string[],
  void,
  { rejectValue: ApiError }
>(
  "genres/fetchGenres",
  async (_, thunkAPI) => {
    const result = await getGenres();
    if (result.isOk()) {
      return result.value;
    } else {
      return thunkAPI.rejectWithValue(result.error);
    }
  }
);

interface GenresState {
  items: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: GenresState = {
  items: [],
  status: "idle",
  error: undefined,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.message : action.error.message;
      }),
});

export default genresSlice.reducer;
