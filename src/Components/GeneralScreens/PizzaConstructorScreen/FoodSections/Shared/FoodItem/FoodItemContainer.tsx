// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import FoodItem from "./FoodItem"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/PizzaConstructorReducers/PizzaConstructorSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  ingredient: any
  CurrentPizzaIngredients: Array<any>
  CurrentPizzaPrice: number
}

type MapDispatchToPropsType = {
  addIngredientActionCreator: (ingredientData: any) => void
  removeIngredientActionCreator: (ingredientName: string) => void
  clearIngredientsActionCreator: () => void

  addPizzaPrice: (addedPizzaPrice: number) => void
  substractPizzaPrice: (substractPizzaPrice: number) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    ingredient: props.ingredient,
    CurrentPizzaIngredients:
      state.PizzaConstructorSetState.CurrentPizzaIngredients,
    CurrentPizzaPrice: state.PizzaConstructorSetState.CurrentPizzaPrice,
  }
}

const PizzaConstructorScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addIngredientActionCreator: ActionCreatorsList.addIngredientActionCreator,
      removeIngredientActionCreator:
        ActionCreatorsList.removeIngredientActionCreator,
      clearIngredientsActionCreator:
        ActionCreatorsList.clearIngredientsActionCreator,

      addPizzaPrice: ActionCreatorsList.addPizzaPrice,
      substractPizzaPrice: ActionCreatorsList.substractPizzaPrice,
    }
  )
)(FoodItem)

export default PizzaConstructorScreenContainer
