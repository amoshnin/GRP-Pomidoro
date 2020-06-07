//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../ReduxStore"

////////////////////////////////////////////////////////////////////////

let initialState = {
  CurrentPizzaIngredients: [] as Array<any>,
  CurrentPizzaPrice: 0 as number,
  CurrentPizzaSize: 24 as number,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const PizzaConstructorReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "ADD_INGREDIENT") {
    const arr = state.CurrentPizzaIngredients

    const found = arr.some((el: any) => el.name === action.ingredientData.name)
    if (!found) arr.push(action.ingredientData)
    if (found) {
      const ingredientIndex = state.CurrentPizzaIngredients.findIndex(
        (element) => element.name == action.ingredientData.name
      )

      let newArray = [...state.CurrentPizzaIngredients]

      newArray[ingredientIndex] = {
        ...newArray[ingredientIndex],
        count: newArray[ingredientIndex].count + 1,
      }

      return {
        ...state,
        CurrentPizzaIngredients: newArray,
      }
    }

    return {
      ...state,
      CurrentPizzaIngredients: arr,
    }
  }

  if (action.type === "REMOVE_INGREDIENT") {
    let newArray = [...state.CurrentPizzaIngredients]
    const ingredientIndex = state.CurrentPizzaIngredients.findIndex(
      (element) => element.name == action.ingredientName
    )

    if (newArray[ingredientIndex].count === 1) {
      const FilteredArray = state.CurrentPizzaIngredients.filter(
        (ingredient: any) => {
          return ingredient.name !== action.ingredientName
        }
      )

      return {
        ...state,
        CurrentPizzaIngredients: FilteredArray,
      }
    } else {
      newArray[ingredientIndex] = {
        ...newArray[ingredientIndex],
        count: newArray[ingredientIndex].count - 1,
      }

      return {
        ...state,
        CurrentPizzaIngredients: newArray,
      }
    }
  }

  if (action.type === "REMOVE_FULL_INGRIDIENT") {
    const FilteredArray = state.CurrentPizzaIngredients.filter(
      (ingridient: any) => {
        return ingridient.name !== action.ingredientName
      }
    )

    return {
      ...state,
      CurrentPizzaIngredients: FilteredArray,
    }
  }

  if (action.type === "CLEAR_PIZZA_INGREDIENTS") {
    return {
      ...state,
      CurrentPizzaIngredients: [],
    }
  }

  if (action.type === "CHANGE_PIZZA_SIZE") {
    return {
      ...state,
      CurrentPizzaSize: action.pizzaSize,
    }
  }

  if (action.type === "ADD_PIZZA_PRICE") {
    return {
      ...state,
      CurrentPizzaPrice: state.CurrentPizzaPrice + action.addedPizzaPrice,
    }
  }

  if (action.type === "SUBSTRACT_PIZZA_PRICE") {
    return {
      ...state,
      CurrentPizzaPrice: state.CurrentPizzaPrice - action.substractPizzaPrice,
    }
  }

  return state
}

export default PizzaConstructorReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  addIngredientActionCreator: (ingredientData: any) =>
    ({
      type: "ADD_INGREDIENT",
      ingredientData,
    } as const),

  removeIngredientActionCreator: (ingredientName: string) =>
    ({
      type: "REMOVE_INGREDIENT",
      ingredientName,
    } as const),

  removeFullIngridientActionCreator: (ingredientName: string) =>
    ({
      type: "REMOVE_FULL_INGRIDIENT",
      ingredientName,
    } as const),

  clearIngredientsActionCreator: () =>
    ({
      type: "CLEAR_PIZZA_INGREDIENTS",
    } as const),

  changePizzaSizeActionCreator: (pizzaSize: number) =>
    ({
      type: "CHANGE_PIZZA_SIZE",
      pizzaSize,
    } as const),

  addPizzaPrice: (addedPizzaPrice: number) =>
    ({
      type: "ADD_PIZZA_PRICE",
      addedPizzaPrice,
    } as const),

  substractPizzaPrice: (substractPizzaPrice: number) =>
    ({
      type: "SUBSTRACT_PIZZA_PRICE",
      substractPizzaPrice,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
