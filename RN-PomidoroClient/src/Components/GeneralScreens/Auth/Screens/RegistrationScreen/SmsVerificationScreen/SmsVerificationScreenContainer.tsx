// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import SmsVerificationScreen from "./SmsVerificationScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { verifySMSCodeThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  SMSVerificationStatus: string
}

type MapDispatchToPropsType = {
  verifySMSCodeThunkCreator: (code: string, phone: string) => any
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    SMSVerificationStatus: state.AuthSetState.SMSVerificationStatus,
  }
}

const RegistrationScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(mapStateToProps, {
    verifySMSCodeThunkCreator,
  })
)(SmsVerificationScreen)

export default RegistrationScreenContainer
