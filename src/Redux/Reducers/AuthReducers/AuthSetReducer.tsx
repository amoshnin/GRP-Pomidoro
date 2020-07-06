//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const AuthSetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  return state
}

export default AuthSetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Register user
export const RegisterUserThunkCreator = (
  name: string,
  phoneNum: string,
  password: string,
  email?: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post("http://138.201.153.220/api/user_create/", {
        name: name,
        email: email,
        phone_num: phoneNum,
        password: password,
      })
      .then((res: any) => {})
  }
}

// Login user
export const LoginUserThunkCreator = (
  phoneNum: string,
  password: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post("http://138.201.153.220/api/auth/login/", {
        username: "PomAdmin",
        password: "Bi647MhCFcjX",
      })
      .then(async (res: any) => {
        await AsyncStorage.setItem("token", res.data.key)
      })
  }
}

// Logout user
export const LogoutUserThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.post("", {}).then((res: any) => {})
  }
}
