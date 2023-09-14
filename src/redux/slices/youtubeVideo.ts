import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VideoState = {
  title: string;
  desc: string;
  privacy: 'public' | 'private';
}

const initialState: VideoState = {
  title: '',
  desc: '',
  privacy: 'public',
};

const youtubeVideoSlice = createSlice({
  name: 'youtubeVideo',
  initialState,
  reducers: {
    addVideoMetadata: (state, action: PayloadAction<VideoState>) => {
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.privacy = action.payload.privacy;
    },
    clearVideoMetadata: (state) => {
      state = initialState
    },
  },
});

export const { addVideoMetadata, clearVideoMetadata } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
