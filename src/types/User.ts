export interface IUser {
  id: string,
  email: string,
  username: string,
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}

export interface IUserState {
  isAuth: boolean;
  currentUser: IUser;
}

export interface IUserAction {
  type: string;
  payload?: IUser;
}