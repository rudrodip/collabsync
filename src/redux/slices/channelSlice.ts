import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type channel } from "@/types/channel";
import axios from "axios";
import { env } from "@env.mjs";

// Define the channelResponse type
type channelResponse = channel | null;

// Define the initial state type
type InitialState = {
  isLoading: boolean;
  isError: boolean;
  channelData: channelResponse;
};

// Initialize the initial state
const initialState: InitialState = {
  isLoading: false,
  isError: false,
  channelData: null,
};


// Create async thunk for fetching channel
export const fetchChannel = createAsyncThunk(
  "fetchChannel",
  async ({
    workspaceId,
    userId,
  }: {
    workspaceId: string;
    userId: string;
  }) => {
    const reqBody = {
      workspaceId,
      userId,
    };
    const res = await axios.post(
      `${env.NEXT_PUBLIC_APP_URL}/api/workspace/channel`,
      reqBody
    );
    return res.data;
  }
);

// Define the channelSlice
export const channelSlice = createSlice({
  name: "channelSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChannel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.channelData = action.payload;
      })
      .addCase(fetchChannel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export default channelSlice.reducer;
