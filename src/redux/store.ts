import { configureStore } from '@reduxjs/toolkit'
import workspaceSlice from './slices/workspaceSlice'
import videoSlice from './slices/videoSlice'
import youtubeVideo from './slices/youtubeVideo'
import chatSlice from './slices/chatSlice'
import channelSlice from './slices/channelSlice'

export const store = configureStore({
  reducer: {
    workspaceSlice,
    videoSlice,
    youtubeVideo,
    chatSlice,
    channelSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch