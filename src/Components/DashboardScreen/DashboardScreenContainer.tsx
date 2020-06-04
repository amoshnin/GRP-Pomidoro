// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import DashboardScreen from "./DashboardScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../Redux/ReduxStore"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any): MapStateToPropsType => {
  return {}
}

const DashboardScreenScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {}
  )
)(DashboardScreen)

export default DashboardScreenScreenContainer
