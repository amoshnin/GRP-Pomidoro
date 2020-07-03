// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import RegistrationScreen from "./RegistrationScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { RegisterUserThunkCreator } from "~/Redux/Reducers/AuthReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {
  RegisterUserThunkCreator: (
    name: string,
    phoneNum: string,
    password: string,
    email?: string
  ) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
  }
}

const RegistrationScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      RegisterUserThunkCreator: RegisterUserThunkCreator,
    }
  )
)(RegistrationScreen)

export default RegistrationScreenContainer
