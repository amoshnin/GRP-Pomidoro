//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../ReduxStore"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const OrderingReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  return state
}

export default OrderingReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getMenuListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {}
}
