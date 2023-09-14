import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VideoState = {
  video: File | null;
  thumbnail: File | null;
  url: string | null;
  thumbnail_url: string | null;
}

const initialState: VideoState = {
  video: null,
  thumbnail: null,
  url: null,
  thumbnail_url: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setUploadedVideo: (state, action: PayloadAction<File>) => {
      state.video = action.payload;
      state.url = URL.createObjectURL(action.payload);
    },
    clearUploadedVideo: (state) => {
      state.video = null;
      state.url = null;
    },
    setThumbnail: (state, action: PayloadAction<File>) => {
      state.thumbnail = action.payload;
      state.thumbnail_url = URL.createObjectURL(action.payload);
    },
    clearThumbnail: (state) => {
      state.thumbnail = null;
      state.thumbnail_url = null;
    },
  },
});

export const { setUploadedVideo, clearUploadedVideo, setThumbnail, clearThumbnail } = videoSlice.actions;

export default videoSlice.reducer;
