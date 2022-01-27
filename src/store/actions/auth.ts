import AuthService from "../../services/AuthService";
import { removeUserAction, setUserAction } from "../reducers/userReduced";
import { Dispatch } from "redux";
import { IUserAction, UserActionTypes } from "../../types/User";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<IUserAction>) => {
    const response = await AuthService.login(email, password);

    dispatch({
      type: UserActionTypes.SET_USER,
      payload: response.data.user,
    });
    localStorage.setItem("token", response.data.accessToken);
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(removeUserAction);
  };
};
