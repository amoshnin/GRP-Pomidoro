//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import { baseUrl } from "~/Redux/Reducers/Helpers/Info"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  MenuList: [] as Array<any>,

  StaticFoodCategoryList: [] as Array<any>,
  CurrentCategoryFoodsList: [] as Array<any>,

  TagsList: [] as Array<any>,
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

  if (action.type === "SET_STATIC_CATEGORY_FOOD_LIST") {
    return {
      ...state,
      StaticFoodCategoryList: action.staticCategoryFoodList,
    }
  }

  if (action.type === "SET_CERTAIN_CATEGORY_FOODS_LIST") {
    return {
      ...state,
      CurrentCategoryFoodsList: action.categoryFoodsList,
    }
  }

  if (action.type === "SET_TAGS_LIST") {
    return {
      ...state,
      TagsList: action.tagsList,
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

  setStaticCategoryFoodListActionCreator: (
    staticCategoryFoodList: Array<any>
  ) =>
    ({
      type: "SET_STATIC_CATEGORY_FOOD_LIST",
      staticCategoryFoodList,
    } as const),

  setCertainCategoryFoodsListActionCreator: (categoryFoodsList: Array<any>) =>
    ({
      type: "SET_CERTAIN_CATEGORY_FOODS_LIST",
      categoryFoodsList,
    } as const),

  setTagsListActionCreator: (tagsList: Array<any>) =>
    ({
      type: "SET_TAGS_LIST",
      tagsList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Get menus list
export const getMenuListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get(`${baseUrl}/client/menus-groups/`)
      .then((res: any) => {
        const data = res.data.results.map((menuItem: any) => {
          return {
            id: menuItem.id,
            image: menuItem.image && menuItem.image.file,
            title: menuItem.title,
          }
        })

        dispatch(ActionCreatorsList.setMenuListActionCreator(data))
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
}

// static certain categoru food list
export const getStaticCategoryFoodsListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get(`${baseUrl}/client/menus/?group__title=${"Пицца"}`)
      .then((res: any) => {
        const data = res.data.results.map((foodItem: any) => {
          return {
            id: foodItem.id,
            image: foodItem.images[0].file,
            name: foodItem.images[0].title,
            ingridientsList: foodItem.description,
            sizes: foodItem.vars.map((variant: any) => ({
              id: variant.id,
              width: Number(variant.dimensions_len.distance) * 100,
              price: Math.round(variant.price),
            })),

            productType: foodItem.ingredients.map((ingredient: any) => ({
              id: ingredient.id,
              title: ingredient.title,
            })),
          }
        })

        dispatch(
          ActionCreatorsList.setStaticCategoryFoodListActionCreator(data)
        )
      })
      .catch(() => {
        dispatch(ActionCreatorsList.setStaticCategoryFoodListActionCreator([]))
      })
  }
}

// Get certain categoru food list
export const getCertainCategoryFoodsListThunkCreator = (
  menuTitle: string,
  limitCount?: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get(`${baseUrl}/client/menus/?group__title=${menuTitle}`)
      .then((res: any) => {
        const data = res.data.results.map((foodItem: any) => {
          return {
            id: foodItem.id,
            image: foodItem.images[0].file,
            name: foodItem.images[0].title,
            ingridientsList: foodItem.description,
            sizes: foodItem.vars.map((variant: any) => ({
              id: variant.id,
              width: Number(variant.dimensions_len.distance) * 100,
              price: Math.round(variant.price),
            })),

            productType: foodItem.ingredients.map((ingredient: any) => ({
              id: ingredient.id,
              title: ingredient.title,
            })),
          }
        })

        dispatch(
          ActionCreatorsList.setCertainCategoryFoodsListActionCreator(data)
        )
      })
      .catch(() => {
        dispatch(
          ActionCreatorsList.setCertainCategoryFoodsListActionCreator([])
        )
      })
  }
}

// Get tags list
export const getTagsListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .get(`${baseUrl}/client/products/`)
      .then((res: any) => {
        console.log(res)

        const data = res.data.results.map((tag: any) => ({
          id: tag.id,
          title: tag.title,
        }))

        dispatch(ActionCreatorsList.setTagsListActionCreator(data))
      })
      .catch(() => {
        dispatch(ActionCreatorsList.setTagsListActionCreator([]))
      })
  }
}
