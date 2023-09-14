import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { workspace } from "@/types/db";
import axios from "axios";
import { env } from "@env.mjs";

// Define the workspaceResponse type
type workspaceResponse = {
  workspaces: workspace[];
};

// Define the initial state type
type InitialState = {
  isLoading: boolean;
  isError: boolean;
  data: workspaceResponse;
};

// Initialize the initial state
const initialState: InitialState = {
  isLoading: false,
  isError: false,
  data: { workspaces: [] },
};

// Create async thunk for fetching workspaces
export const fetchWorkspaces = createAsyncThunk(
  "fetchWorkspaces",
  
  async (userId: string) => {
    const res = await axios.get(
      `${env.NEXT_PUBLIC_APP_URL}/api/workspaces/${userId}`
    );
    return res.data;
  }
);

// Create async thunk for fetching workspace
export const fetchWorkspace = createAsyncThunk(
  "fetchWorkspace",
  async (workspaceId: string) => {
    const res = await axios.get(
      `${env.NEXT_PUBLIC_APP_URL}/api/workspace/${workspaceId}`
    );
    return res.data;
  }
);

// Create async thunk for creating a workspace
export const createWorkspace = createAsyncThunk(
  "createWorkspace",
  async ({
    workspaceName,
    userId,
  }: {
    workspaceName: string;
    userId: string;
  }) => {
    const reqBody = {
      workspaceName,
      userId,
    };

    const res = await axios.post(
      `${env.NEXT_PUBLIC_APP_URL}/api/workspace`,
      reqBody
    );

    return {
      status: res.status,
      id: res.data.id as string,
      userId: userId,
      workspaceName: workspaceName,
      channel_id: res.data.channel_id,
    };
  }
);

// Define the workspaceSlice
export const workspaceSlice = createSlice({
  name: "workspaceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWorkspace.fulfilled, (state, action) => {
        state.isError = false;
        
        const newWorkspace: workspace = {
          id: action.payload.id,
          channel_id: action.payload.channel_id,
          creator: action.payload.creator,
          name: action.payload.name,
          editors: action.payload.editors,
          pending_videos: action.payload.pending_videos,
          uploaded_videos: action.payload.uploaded_videos,
        };

        state.data.workspaces.push(newWorkspace);
        state.isLoading = false;
      })
      .addCase(fetchWorkspace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(createWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWorkspace.fulfilled, (state, action) => {
        const newWorkspace: workspace = {
          id: action.payload.id,
          channel_id: action.payload.channel_id,
          creator: action.payload.userId,
          name: action.payload.workspaceName,
          editors: [],
          pending_videos: [],
          uploaded_videos: [],
        };

        state.data.workspaces.push(newWorkspace);
        state.isLoading = false;
      })
      .addCase(createWorkspace.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default workspaceSlice.reducer;
