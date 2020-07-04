//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../ReduxStore"

////////////////////////////////////////////////////////////////////////

let initialState = {
  OrderItemsList: [] as Array<{}>,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const OrderingReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "ADD_ITEM_TO_ORDER") {
    return {
      ...state,
      OrderItemsList: [...state.OrderItemsList, action.orderItem],
    }
  }

  return state
}

export default OrderingReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  addItemToOrderActionCreator: (
    name: string,
    price: string,
    image: string,
    size: string,
    ingredients: Array<string>
  ) =>
    ({
      type: "ADD_ITEM_TO_ORDER",
      orderItem: {
        name: name,
        price: price,
        size: size,
        image: image,
        count: 0,
        ingredients: ingredients,
      },
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
