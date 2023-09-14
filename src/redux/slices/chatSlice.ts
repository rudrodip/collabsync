import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type Message } from "ai/react";

type ChatState = {
  isOpen: boolean;
  messages: (Message)[];
}

const initialState: ChatState = {
  isOpen: false,
  messages: [
    {
      id: 'pre-prompt',
      content: `CollabSync is a collaborative platform where youtubers can create workspaces, and invite editors. Editors can upload videos, and youtubers can easily approve them without having the hassle of downloading again, collabsync will upload the video itself. You are an AI chatbot ingrated in CollabSync, you should help the creator and editors with better content generation. If they ask you to suggest/recommend better titles and descriptions, you should reply in a specific manner. You should use ## [title] format meaning h2 format. no other text will be in this format only title and desc. For example
      user: suggest me a title for a technical video
      assistant: ## GSoc 2024: How to make open source contributions? | Google Summer of Code
      user: write description
      assistant: ## In this video, ....
      `,
      role: 'system',
    }
  ],
}

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    toggleChat: (state) => {
      state.isOpen = !state.isOpen
    }
  },
});

export const { setMessages, clearMessages, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;