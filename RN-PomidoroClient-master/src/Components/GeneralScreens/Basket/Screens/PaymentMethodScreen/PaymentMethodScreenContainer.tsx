// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import PaymentMethodScreen from "./PaymentMethodScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  cardNum: string
  OrderItemsList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
}

type MapDispatchToPropsType = {
  setPaymentMethodActionCreator: (paymentMethod: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    cardNum: state.PrivateCabinetGetState.CreditCard.cardNum,
    OrderItemsList: state.OrderingSetState.OrderItemsList,
  }
}

const PaymentMethodScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setPaymentMethodActionCreator:
        ActionCreatorsList.setPaymentMethodActionCreator,
    }
  )
)(PaymentMethodScreen)

export default PaymentMethodScreenContainer
