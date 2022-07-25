import {
  isAsyncThunkAction,
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
} from "@reduxjs/toolkit";

import { MessageState } from "../types/storeTypes";
import { createMessage } from "../slices/MessageSlice";

export const messageMiddleware: Middleware =
  (store: MiddlewareAPI) => (next) => async (action) => {
    if (isAsyncThunkAction(action)) {
      if (isRejectedWithValue(action)) {
        const message: MessageState = {
          content: action.payload.data.message,
          type: "error",
        };
        store.dispatch(createMessage(message));
      }
    }

    return next(action);
  };
