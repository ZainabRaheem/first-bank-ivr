import { VALIDATE_INPUT_FAILURE, VALIDATE_INPUT_SUCCESS } from "./types";

export const validateInputSuccess = (details) => {
  return {
    type: VALIDATE_INPUT_SUCCESS,
    payload: details,
  };
};

export const validateInputFailure = (details) => {
  return {
    type: VALIDATE_INPUT_FAILURE,
    payload: details,
  };
};
