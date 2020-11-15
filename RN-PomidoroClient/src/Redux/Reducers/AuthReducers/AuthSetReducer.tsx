//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import AsyncStorage from "@react-native-community/async-storage"
import { RegisterDataType } from "~/Redux/Reducers/Helpers/Types"
import { baseUrl } from "~/Redux/Reducers/Helpers/Info"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  registerData: {
    name: null as string | null,
    phoneNum: null as string | null,
    password: null as string | null,
    email: null as string | null,
  } as RegisterDataType,

  SMSVerificationStatus: false as boolean,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const AuthSetReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  if (action.type === "SET_REGISTER_DATA") {
    return {
      ...state,
      registerData: action.registerData,
    }
  }

  if (action.type === "SET_SMS_VERIFICATION_STATUS") {
    return {
      ...state,
      SMSVerificationStatus: action.SMSVerificationStatus,
    }
  }

  return state
}

export default AuthSetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setRegisterDataActionCreator: (registerData: RegisterDataType) =>
    ({
      type: "SET_REGISTER_DATA",
      registerData,
    } as const),

  setSMSVerificationStatusActionCreator: (SMSVerificationStatus: boolean) =>
    ({
      type: "SET_SMS_VERIFICATION_STATUS",
      SMSVerificationStatus,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// REGISTER REDUCERS
// Register user
export const sendRegisterDataThunkCreator = (
  name: string,
  phoneNum: string,
  password: string,
  email?: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    dispatch(
      ActionCreatorsList.setRegisterDataActionCreator({
        name,
        phoneNum,
        password,
        email,
      })
    )
    dispatch(sendPhoneNumToVerifyThunkCreator(phoneNum))
  }
}

// Send phone num to verify
export const sendPhoneNumToVerifyThunkCreator = (phoneNum: string): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post(`${baseUrl}/user/passcode/send_sms/`, {
        phone_number: `+380${phoneNum}`,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// Verify sms code
export const verifySMSCodeThunkCreator = (code: string, phone: string): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post(`${baseUrl}/user/passcode/phone_verification/`, {
        phone_number: "+380633430412",
        passcode: code,
      })
      .then(async (res) => {
        const token = res.data.key
        await AsyncStorage.setItem("token", token)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// LOGIN REDUCERS
// Login user
export const LoginUserThunkCreator = (phoneNum: string, password: string): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post(`${baseUrl}/auth/login/`, {
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
    await AsyncStorage.setItem("token", JSON.stringify(null))
  }
}
