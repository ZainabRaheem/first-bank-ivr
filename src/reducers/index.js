import { authReducer } from "./auth_reducer";
import { messageReducer } from "./message_reducer";
import { combineReducers } from "redux";
import { validateInputReducer } from "./valildate_input_reducer";

export default combineReducers({
  authReducer,
  messageReducer,
  validateInputReducer,
});
