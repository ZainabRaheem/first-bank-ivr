import AuthService from "../services/auth-service"
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SET_MESSAGE } from "./types"

export const login = (username, password) => (dispatch) => {
    
return AuthService.login(username, password).then((response) => {
    console.log("hey there")
    dispatch({type: LOGIN_SUCCESS, payload: response.data});
    dispatch({type: SET_MESSAGE, payload: response.data.message});

    return Promise.resolve();
}, (error) => {
    const message = "Unable to login"
    dispatch({type: LOGIN_FAILURE})
    dispatch({type: SET_MESSAGE, payload: message})

    return Promise.reject();
})

}

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({type: LOGOUT});
}