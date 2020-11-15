// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

import { getUserFullInfoThunkCreator } from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinerGetReducer"
import { UpdateAvatarThunkCreator } from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinetSetReducer"
import { LogoutUserThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
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

  CreditCard: {
    cardNum: string
    CVV: string
    ExpDate: string
  }

  OrdersList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
}

type MapDispatchToPropsType = {
  getUserFullInfoThunkCreator: () => void
  UpdateAvatarThunkCreator: (avatar: Blob) => void
  LogoutUserThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    UserCredentials: state.PrivateCabinetGetState.UserCredentials,
    CreditCard: state.PrivateCabinetGetState.CreditCard,
    OrdersList: state.PrivateCabinetGetState.OrdersList,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUserFullInfoThunkCreator: getUserFullInfoThunkCreator,
      UpdateAvatarThunkCreator: UpdateAvatarThunkCreator,
      LogoutUserThunkCreator: LogoutUserThunkCreator,
    }
  )
)(Main)

export default MainContainer
