//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../ReduxStore"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  MenuList: [] as Array<any>,

  CertainGroupProductData: {} as any,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const FoodListReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "SET_MENU_LIST") {
    return {
      ...state,
      MenuList: action.menuList,
    }
  }

  if (action.type === "SET_CERTAIN_MENU_GROUP_PRODUCTS_LIST") {
    return {
      ...state,
      CertainGroupProductData: action.certainGroupProductData,
    }
  }

  return state
}

export default FoodListReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setMenuListActionCreator: (menuList: Array<any>) =>
    ({
      type: "SET_MENU_LIST",
      menuList,
    } as const),

  setCertainMenuGroupProductDataActionCreator: (certainGroupProductData: any) =>
    ({
      type: "SET_CERTAIN_MENU_GROUP_PRODUCTS_LIST",
      certainGroupProductData,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Get menus list
export const getMenuListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    axios.get("http://138.201.153.220/api/menu_category/").then((res: any) => {
      dispatch(ActionCreatorsList.setMenuListActionCreator(res.data))
    })
  }
}

// Get menu list
export const getCertainMenuGroupProductDataThunkCreator = (
  groupId: number
): ThunkType => {
  return async (dispatch, getState: any) => {
    axios
      .get(`http://138.201.153.220/api/menu_group/${groupId}`)
      .then((res: any) => {
        console.log(res)
        dispatch(
          ActionCreatorsList.setCertainMenuGroupProductDataActionCreator(
            res.data
          )
        )
      })
  }
}
