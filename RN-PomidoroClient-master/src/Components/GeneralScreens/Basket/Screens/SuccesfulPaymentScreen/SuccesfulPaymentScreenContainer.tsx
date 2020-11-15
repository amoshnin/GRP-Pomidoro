// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import SuccesfulPaymentScreen from "./SuccesfulPaymentScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  OrderBonusesUsed: string
  DeliveryType: {
    adress: string
    comment: string
  }
  PaymentMethod: string

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
    ingredients: Array<string>,
    id: string
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

    OrderBonusesUsed: state.OrderingSetState.OrderBonusesUsed,
    DeliveryType: state.OrderingSetState.DeliveryType,
    PaymentMethod: state.OrderingSetState.PaymentMethod,
    OrderItemsList: state.OrderingSetState.OrderItemsList,
  }
}

const SuccesfulPaymentScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      removeItemFromOrderActionCreator:
        ActionCreatorsList.removeItemFromOrderActionCreator,
    }
  )
)(SuccesfulPaymentScreen)

export default SuccesfulPaymentScreenContainer
