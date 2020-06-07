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
}

type MapDispatchToPropsType = {
  addIngredientActionCreator: (ingredientData: any) => void
  removeIngredientActionCreator: (ingredientName: string) => void
  clearIngredientsActionCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    ingredient: props.ingredient,
    CurrentPizzaIngredients:
      state.PizzaConstructorState.CurrentPizzaIngredients,
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
    }
  )
)(FoodItem)

export default PizzaConstructorScreenContainer
