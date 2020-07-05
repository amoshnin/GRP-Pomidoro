// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import PaymentScreen from "./PaymentScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  DeliveryTime: string
  OrderItemsList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
}

type MapDispatchToPropsType = {
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
  removeItemFromOrderActionCreator: (
    title: string,
    size: string,
    id: string
  ) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    DeliveryTime: state.OrderingSetState.DeliveryTime,
    OrderItemsList: state.OrderingSetState.OrderItemsList,
  }
}

const PaymentScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      removeItemFromOrderActionCreator:
        ActionCreatorsList.removeItemFromOrderActionCreator,
    }
  )
)(PaymentScreen)

export default PaymentScreenContainer
