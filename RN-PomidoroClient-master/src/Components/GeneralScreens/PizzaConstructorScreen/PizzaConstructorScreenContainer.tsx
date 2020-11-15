// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import PizzaConstructorScreen from "./PizzaConstructorScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"
import { ActionCreatorsList as PizzaConstructorActionCreatorsList } from "~/Redux/Reducers/PizzaConstructorReducers/PizzaConstructorSetReducer"
import { ActionCreatorsList as OrderingSetReducerActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

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
  clearConstructorPizzaInfoActionCreator: () => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>,
    id: string
  ) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    CurrentPizzaIngredients:
      state.PizzaConstructorSetState.CurrentPizzaIngredients,
    CurrentPizzaPrice: state.PizzaConstructorSetState.CurrentPizzaPrice,
    CurrentPizzaSize: state.PizzaConstructorSetState.CurrentPizzaSize,
  }
}

const PizzaConstructorScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      changePizzaSizeActionCreator:
        PizzaConstructorActionCreatorsList.changePizzaSizeActionCreator,
      removeFullIngridientActionCreator:
        PizzaConstructorActionCreatorsList.removeFullIngridientActionCreator,
      clearConstructorPizzaInfoActionCreator:
        PizzaConstructorActionCreatorsList.clearConstructorPizzaInfoActionCreator,
      addItemToOrderActionCreator:
        OrderingSetReducerActionCreatorsList.addItemToOrderActionCreator,
    }
  )
)(PizzaConstructorScreen)

export default PizzaConstructorScreenContainer
