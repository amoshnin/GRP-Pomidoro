//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../ReduxStore"

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

// Get menu list
export const getMenuListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {}
}
