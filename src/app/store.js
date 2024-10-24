import { configureStore } from "@reduxjs/toolkit";
import photoRedcuer from "../components/photo/photoSlice"

export default configureStore({
  reducer: {
    photo: photoRedcuer
  },
});
