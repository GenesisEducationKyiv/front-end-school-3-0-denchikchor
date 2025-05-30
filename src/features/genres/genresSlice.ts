import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGenres } from '../../api/genres';

export const fetchGenres = createAsyncThunk('genres/fetchGenres', () => getGenres());

const genresSlice = createSlice({
  name: 'genres',
  initialState: { items: [] as string[], status: 'idle' },
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    }),
});

export default genresSlice.reducer;
