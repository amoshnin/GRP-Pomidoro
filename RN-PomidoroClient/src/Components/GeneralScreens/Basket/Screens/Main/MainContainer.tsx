// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"
import { getUserFullInfoThunkCreator } from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinerGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  OrderItemsList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
  UserCredentials: {
    name: string | null
    surname: string | null
    email: string | null
    phoneNum: string | null
    region: string | null
    password: string | null
    avatar: string | null
    userType: string | null
    bonusesCount: string | null
  }
  OrderBonusesUsed: string
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
  setBonusesCountActionCreator: (bonusesCount: string) => void

  getUserFullInfoThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    UserCredentials: state.PrivateCabinetGetState.UserCredentials,
    OrderItemsList: state.OrderingSetState.OrderItemsList,
    OrderBonusesUsed: state.OrderingSetState.OrderBonusesUsed,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      removeItemFromOrderActionCreator:
        ActionCreatorsList.removeItemFromOrderActionCreator,
      setBonusesCountActionCreator:
        ActionCreatorsList.setBonusesCountActionCreator,
      getUserFullInfoThunkCreator: getUserFullInfoThunkCreator,
    }
  )
)(Main)

export default MainContainer
