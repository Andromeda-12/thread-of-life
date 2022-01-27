import { combineReducers } from "redux"
import userReducer from "./userReduced"

export const rootReducer= combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>