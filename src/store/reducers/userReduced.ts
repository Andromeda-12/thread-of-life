import { IUser, IUserState, IUserAction, UserActionTypes } from "../../types/User";

const initialState: IUserState = {
  currentUser: {} as IUser,
  isAuth: false,
};

const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, currentUser: action.payload!, isAuth: true };
    case UserActionTypes.REMOVE_USER:
      localStorage.removeItem("token");
      return { ...state, currentUser: {} as IUser, isAuth: false };
    default:
      return state;
  }
};

export const setUserAction = (user: IUser) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});
export const removeUserAction = () => ({ type: UserActionTypes.REMOVE_USER });

export default userReducer;
