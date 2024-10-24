import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "photo",
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    fetchPhotoStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPhotoSuccess(state, action) {
      state.loading = false;
      state.photo = action.payload;
    },
    fetchLoadingAnimate(state, action) {
      state.loading = false;
      state.photo = action.payload;
    },
  },
});

export const { fetchLoadingAnimate, fetchPhotoStart, fetchPhotoSuccess } =
  photoSlice.actions;

export default photoSlice.reducer;
