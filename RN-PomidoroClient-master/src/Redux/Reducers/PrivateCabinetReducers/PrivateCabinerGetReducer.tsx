//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import { baseUrl } from "~/Redux/Reducers/Helpers/Info"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  UserCredentials: {
    name: null as string | null,
    surname: null as string | null,
    email: null as string | null,
    phoneNum: null as string | null,
    region: null as string | null,
    password: null as string | null,
    avatar: null as string | null,
    userType: null as string | null,
    bonusesCount: null as string | null,
    savedAdresses: [] as Array<string>,
  },

  CreditCard: {} as {
    cardNum: string
    CVV: string
    ExpDate: string
  },

  OrdersList: [] as Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const OrderingGetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "SET_USER_CREDENTIALS") {
    return {
      ...state,
      UserCredentials: {
        name: action.name,
        surname: action.surname,
        email: action.email,
        phoneNum: action.phoneNum,
        region: action.region,
        password: action.password,
        avatar: action.avatar,
        userType: action.userType,
        bonusesCount: action.bonusesCount,
        savedAdresses: action.savedAdresses,
      },
    }
  }

  if (action.type === "SET_USER_CREDIT_CARDS_LIST") {
    return {
      ...state,
      CreditCard: action.CreditCard,
    }
  }

  if (action.type === "SET_USER_ORDERS_LIST") {
    return {
      ...state,
      OrdersList: action.ordersList,
    }
  }

  return state
}

export default OrderingGetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setUserCredentialsActionCreator: (
    name: string,
    surname: string,
    email: string,
    phoneNum: string,
    region: string,
    password: string,
    avatar: string,
    userType: string,
    bonusesCount: string,
    savedAdresses: Array<string>
  ) =>
    ({
      type: "SET_USER_CREDENTIALS",
      name,
      surname,
      email,
      phoneNum,
      region,
      password,
      avatar,
      userType,
      bonusesCount,
      savedAdresses,
    } as const),

  setUserCreditCard: (CreditCard: {
    cardNum: string
    CVV: string
    ExpDate: string
  }) =>
    ({
      type: "SET_USER_CREDIT_CARDS_LIST",
      CreditCard,
    } as const),

  setUserOrdersList: (
    ordersList: Array<{
      date: string
      deliveryStatus: string
      products: Array<{ title: string; count: string | number }>
    }>
  ) =>
    ({
      type: "SET_USER_ORDERS_LIST",
      ordersList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Get bonuses count
export const getUserFullInfoThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get(`${baseUrl}`).then((res: any) => {
      dispatch(
        ActionCreatorsList.setUserCredentialsActionCreator(
          res.data.name,
          res.data.surname,
          res.data.email,
          res.data.phoneNum,
          res.data.region,
          res.data.password,
          res.data.avatar,
          res.data.userType,
          res.data.bonusesCount,
          res.data.savedAdresses
        )
      )

      dispatch(ActionCreatorsList.setUserCreditCard(res.data.CreditCard))

      dispatch(ActionCreatorsList.setUserOrdersList(res.data.ordersList))
    })
  }
}
