// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DeliveryTimeSelectionScreen from "./DeliveryTimeSelectionScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {
  setOrderDeliveryTimeActionCreator: (orderDeliveryTime: string | Date) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {}
}

const DeliveryTimeSelectionScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setOrderDeliveryTimeActionCreator:
        ActionCreatorsList.setOrderDeliveryTimeActionCreator,
    }
  )
)(DeliveryTimeSelectionScreen)

export default DeliveryTimeSelectionScreenContainer
