//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  MenuList: [] as Array<any>,
  CurrentCategoryFoodsList: [] as Array<any>,
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

  if (action.type === "SET_CERTAIN_CATEGORY_FOODS_LIST") {
    return {
      ...state,
      CurrentCategoryFoodsList: action.categoryFoodsList,
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

  setCertainCategoryFoodsListActionCreator: (categoryFoodsList: Array<any>) =>
    ({
      type: "SET_CERTAIN_CATEGORY_FOODS_LIST",
      categoryFoodsList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Get menus list
export const getMenuListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get("http://138.201.153.220/api/menu_group/")
      .then((res: any) => {
        console.log(res)
        dispatch(ActionCreatorsList.setMenuListActionCreator(res.data))
      })
  }
}

// Get certain categoru food list
export const getCertainCategoryFoodsListThunkCreator = (
  rawId: string,
  limitCount?: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get(`http://138.201.153.220/api/menu/?group_id=${rawId}`)
      .then((res: any) => {
        console.log(res.data)
        dispatch(
          ActionCreatorsList.setCertainCategoryFoodsListActionCreator(res.data)
        )
      })
      .catch(() => {
        dispatch(
          ActionCreatorsList.setCertainCategoryFoodsListActionCreator([])
        )
      })
  }
}
