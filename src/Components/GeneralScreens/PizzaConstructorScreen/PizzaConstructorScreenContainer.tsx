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
  CurrentPizzaPrice: number
  CurrentPizzaSize: number
}

type MapDispatchToPropsType = {
  changePizzaSize: (pizzaSize: number) => void
  addPizzaPrice: (addedPizzaPrice: number) => void
  substractPizzaPrice: (substractPizzaPrice: number) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    CurrentPizzaPrice: state.PizzaConstructorState.CurrentPizzaPrice,
    CurrentPizzaSize: state.PizzaConstructorState.CurrentPizzaSize,
  }
}

const PizzaConstructorScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      changePizzaSize: ActionCreatorsList.changePizzaSize,
      addPizzaPrice: ActionCreatorsList.addPizzaPrice,
      substractPizzaPrice: ActionCreatorsList.substractPizzaPrice,
    }
  )
)(PizzaConstructorScreen)

export default PizzaConstructorScreenContainer
