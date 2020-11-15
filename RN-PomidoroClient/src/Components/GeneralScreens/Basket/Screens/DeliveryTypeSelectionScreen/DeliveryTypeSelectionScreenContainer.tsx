// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DeliveryTypeSelectionScreen from "./DeliveryTypeSelectionScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"
import { addAdressThunkCreator } from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinetSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  savedAdresses: Array<string>
}

type MapDispatchToPropsType = {
  addAdressThunkCreator: (adress: string) => void
  setDeliveryTypeActionCreator: (orderDeliveryType: {
    adress: string
    comment: string
  }) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    savedAdresses: state.PrivateCabinetGetState.UserCredentials.savedAdresses,
  }
}

const DeliveryTypeSelectionScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setDeliveryTypeActionCreator:
        ActionCreatorsList.setDeliveryTypeActionCreator,
      addAdressThunkCreator: addAdressThunkCreator,
    }
  )
)(DeliveryTypeSelectionScreen)

export default DeliveryTypeSelectionScreenContainer
