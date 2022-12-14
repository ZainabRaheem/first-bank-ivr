import { CLEAR_MESSAGE, SET_MESSAGE } from "../actions/types";

const initialState = { message: "" };

export const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
};
