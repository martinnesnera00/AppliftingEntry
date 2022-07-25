import { createSlice } from "@reduxjs/toolkit";

import { MessageState } from "../types/storeTypes";

const initialState: MessageState = {
  content: "",
  type: undefined,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    createMessage: (state, action) => action.payload,
    removeMessage: (state) => initialState,
  },
});

export const { removeMessage, createMessage } = messageSlice.actions;
export default messageSlice.reducer;
