//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  SMSVerificationCode: null as string | null,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const AuthGetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "SET_SMS_VERIFICATION_CODE") {
    return {
      ...state,
      SMSVerificationCode: action.SMSVerificationCode,
    }
  }

  return state
}

export default AuthGetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setSMSVerificationCodeActionCreator: (SMSVerificationCode: string) =>
    ({
      type: "SET_SMS_VERIFICATION_CODE",
      SMSVerificationCode,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Login user
export const GetSMSVerificationCodeThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get("", {})
      .then((res: any) =>
        dispatch(
          ActionCreatorsList.setSMSVerificationCodeActionCreator(res.data)
        )
      )
  }
}
