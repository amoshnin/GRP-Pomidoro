// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import FoodItem from "./FoodItem"

// EXTRA IMPORTS //
import { ActionCreatorsList } from "~/Redux/Reducers/PizzaConstructorReducers/PizzaConstructorSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
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
    navigation: props.navigation,
    ingredient: props.ingredient,
    CurrentPizzaIngredients:
      state.PizzaConstructorSetState.CurrentPizzaIngredients,
    CurrentPizzaPrice: state.PizzaConstructorSetState.CurrentPizzaPrice,
  }
}

const FoodItemContainer = compose(
  connect(mapStateToProps, {
    addIngredientActionCreator: ActionCreatorsList.addIngredientActionCreator,
    removeIngredientActionCreator:
      ActionCreatorsList.removeIngredientActionCreator,
    clearIngredientsActionCreator:
      ActionCreatorsList.clearIngredientsActionCreator,

    addPizzaPrice: ActionCreatorsList.addPizzaPrice,
    substractPizzaPrice: ActionCreatorsList.substractPizzaPrice,
  })
)(FoodItem)

export default FoodItemContainer
