import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch photos from your Node/Express backend
export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:5000/api/photos");
      if (!res.ok) throw new Error("Failed to fetch photos");
      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addPhoto(state, action) {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
