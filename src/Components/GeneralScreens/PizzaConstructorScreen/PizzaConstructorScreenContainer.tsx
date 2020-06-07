// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import PizzaConstructorScreen from "./PizzaConstructorScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/PizzaConstructorReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  CurrentPizzaIngredients: Array<any>
  CurrentPizzaPrice: number
  CurrentPizzaSize: number
}

type MapDispatchToPropsType = {
  changePizzaSizeActionCreator: (pizzaSize: number) => void
  removeFullIngridientActionCreator: (ingridientName: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
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
      changePizzaSizeActionCreator:
        ActionCreatorsList.changePizzaSizeActionCreator,
      removeFullIngridientActionCreator:
        ActionCreatorsList.removeFullIngridientActionCreator,
    }
  )
)(PizzaConstructorScreen)

export default PizzaConstructorScreenContainer
