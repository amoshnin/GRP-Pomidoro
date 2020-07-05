//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  OrderItemsList: [] as Array<{}>,
  OrderBonusesUsed: null as string | null,

  DeliveryTime: null as string | Date | null,
  DeliveryType: {
    adress: null as string | null,
    comment: null as string | null,
  },

  PaymentMethod: null as string | null,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const OrderingSetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "CLEAR_BASKET_INFORMATION") {
    return {
      ...state,
      OrderItemsList: [],
      OrderBonusesUsed: null,

      DeliveryTime: null,
      DeliveryType: {
        adress: null,
        comment: null,
      },

      PaymentMethod: null,
    }
  }

  if (action.type === "ADD_ITEM_TO_ORDER") {
    return {
      ...state,
      OrderItemsList: [...state.OrderItemsList, action.orderItem],
    }
  }

  if (action.type == "REMOVE_ITEM_FROM_ORDER") {
    return {
      ...state,
      OrderItemsList: state.OrderItemsList.filter((elem: any) => {
        return !(
          elem.title == action.title &&
          elem.size == action.size &&
          elem.id == action.id
        )
      }),
    }
  }

  if (action.type === "SET_BONUSES_COUNT") {
    return {
      ...state,
      OrderBonusesUsed: action.bonusesCount,
    }
  }

  if (action.type === "SET_ORDER_DELIVERY_TIME") {
    return {
      ...state,
      DeliveryTime: action.orderDeliveryTime,
    }
  }

  if (action.type === "SET_ORDER_DELIVERY_TYPE") {
    return {
      ...state,
      DeliveryType: action.orderDeliveryType,
    }
  }

  if (action.type === "SET_PAYMENT_METHOD") {
    return {
      ...state,
      PaymentMethod: action.paymentMethod,
    }
  }

  return state
}

export default OrderingSetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  clearBasketInformation: () =>
    ({
      type: "CLEAR_BASKET_INFORMATION",
    } as const),

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) =>
    ({
      type: "ADD_ITEM_TO_ORDER",
      orderItem: {
        title: title,
        price: price,
        originalPrice: originalPrice,
        size: size,
        image: image,
        count: count,
        ingredients: ingredients,
        id: Math.random(),
      },
    } as const),

  removeItemFromOrderActionCreator: (title: string, size: string, id: string) =>
    ({
      type: "REMOVE_ITEM_FROM_ORDER",
      title: title,
      size: size,
      id: id,
    } as const),

  setBonusesCountActionCreator: (bonusesCount: string) =>
    ({
      type: "SET_BONUSES_COUNT",
      bonusesCount,
    } as const),

  setOrderDeliveryTimeActionCreator: (orderDeliveryTime: string | Date) =>
    ({
      type: "SET_ORDER_DELIVERY_TIME",
      orderDeliveryTime,
    } as const),

  setDeliveryTypeActionCreator: (orderDeliveryType: {
    adress: string
    comment: string
  }) =>
    ({
      type: "SET_ORDER_DELIVERY_TYPE",
      orderDeliveryType,
    } as const),

  setPaymentMethodActionCreator: (paymentMethod: string) =>
    ({
      type: "SET_PAYMENT_METHOD",
      paymentMethod,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Send order data
export const SendOrderDataThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post("", {
        OrderItemsList: state.OrderingSetState.OrderItemsList,
        OrderBonusesUsed: state.OrderingSetState.OrderBonusesUsed,
        DeliveryTime: state.OrderingSetState.DeliveryTime,
        DeliveryType: state.OrderingSetState.DeliveryType,
        PaymentMethod: state.OrderingSetState.PaymentMethod,
      })
      .then((res: any) => {
        dispatch(ActionCreatorsList.clearBasketInformation())
      })
  }
}
