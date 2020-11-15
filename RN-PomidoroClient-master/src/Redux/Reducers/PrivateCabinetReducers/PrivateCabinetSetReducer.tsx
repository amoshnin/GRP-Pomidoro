//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import { baseUrl } from "~/Redux/Reducers/Helpers/Info"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const PrivateCabinetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  return state
}

export default PrivateCabinetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Connect credit card
export const ConnectCreditCardThunkCreator = (
  cardNum: string,
  CVV: string,
  ExpDate: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post(`${baseUrl}`, {
        credit_card_num: cardNum,
        CVV: CVV,
        exp_date: ExpDate,
      })
      .then((res: any) => {})
  }
}

// Update avatar
export const UpdateAvatarThunkCreator = (avatar: Blob): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.post(`${baseUrl}`, { avatar: avatar }).then((res: any) => {})
  }
}

// Add adress
export const addAdressThunkCreator = (adress: string): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.post(`${baseUrl}`, { adress: adress }).then((res: any) => {})
  }
}
