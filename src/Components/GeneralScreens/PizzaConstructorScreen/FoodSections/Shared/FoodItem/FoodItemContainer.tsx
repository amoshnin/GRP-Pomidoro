// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import FoodItem from "./FoodItem"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/PizzaConstructorReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  ingredient: any
  CurrentPizzaIngredients: Array<any>
  CurrentPizzaPrice: number
  CurrentPizzaSize: number
}

type MapDispatchToPropsType = {
  addIngredientActionCreator: (ingredientData: any) => void
  removeIngredientActionCreator: (ingredientName: string) => void
  changePizzaSize: (pizzaSize: number) => void
  addPizzaPrice: (addedPizzaPrice: number) => void
  substractPizzaPrice: (substractPizzaPrice: number) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    ingredient: props.ingredient,
    CurrentPizzaIngredients:
      state.PizzaConstructorState.CurrentPizzaIngredients,
    CurrentPizzaPrice: state.PizzaConstructorState.CurrentPizzaPrice,
    CurrentPizzaSize: state.PizzaConstructorState.CurrentPizzaSize,
  }
}

const PizzaConstructorScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addIngredientActionCreator: ActionCreatorsList.addIngredientActionCreator,
      removeIngredientActionCreator:
        ActionCreatorsList.removeIngredientActionCreator,
      changePizzaSize: ActionCreatorsList.changePizzaSize,
      addPizzaPrice: ActionCreatorsList.addPizzaPrice,
      substractPizzaPrice: ActionCreatorsList.substractPizzaPrice,
    }
  )
)(FoodItem)

export default PizzaConstructorScreenContainer
