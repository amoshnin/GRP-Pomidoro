// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MainScreen from "./MainScreen"

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

const MainScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {}
  )
)(MainScreen)

export default MainScreenContainer
