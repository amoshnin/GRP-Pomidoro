// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import SmsVerificationScreen from "./SmsVerificationScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { registerUserThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  SMSVerificationCode: string
}

type MapDispatchToPropsType = {
  registerUserThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    SMSVerificationCode: state.AuthGetState.SMSVerificationCode,
  }
}

const RegistrationScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      registerUserThunkCreator: registerUserThunkCreator,
    }
  )
)(SmsVerificationScreen)

export default RegistrationScreenContainer
