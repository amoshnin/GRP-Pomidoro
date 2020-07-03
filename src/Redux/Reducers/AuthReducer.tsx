//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../ReduxStore"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const FoodListReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  return state
}

export default FoodListReducer

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