import {
  VALIDATE_INPUT_FAILURE,
  VALIDATE_INPUT_SUCCESS,
} from "../actions/types";

const initialState = {
  inputError: "",
  inputSuccess: "",
};

export const validateInputReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VALIDATE_INPUT_SUCCESS:
      return {
        ...state,
        inputSuccess: payload.message,
      };
    case VALIDATE_INPUT_FAILURE:
      return {
        ...state,
        inputError: payload.message,
      };
    default:
      return state;
  }
};
