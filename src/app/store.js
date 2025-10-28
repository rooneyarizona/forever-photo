import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../client/components/user/userSlice';
import photoReducer from '../client/components/photo/photoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    photos: photoReducer,
  },
});

export default store;
