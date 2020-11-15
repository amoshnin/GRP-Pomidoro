// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import CreditCardChangeScreen from "./CreditCardChangeScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ConnectCreditCardThunkCreator } from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinetSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {
  ConnectCreditCardThunkCreator: (
    cardNum: string,
    CVV: string,
    ExpDate: string
  ) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
  }
}

const CreditCardChangeScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      ConnectCreditCardThunkCreator: ConnectCreditCardThunkCreator,
    }
  )
)(CreditCardChangeScreen)

export default CreditCardChangeScreenContainer
