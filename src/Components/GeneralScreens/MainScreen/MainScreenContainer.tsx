// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MainScreen from "./MainScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"
import { getMenuListThunkCreator } from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  MenuList: Array<any>
}

type MapDispatchToPropsType = {
  getMenuListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    MenuList: state.FoodListState.MenuList,
  }
}

const MainScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getMenuListThunkCreator: getMenuListThunkCreator,
    }
  )
)(MainScreen)

export default MainScreenContainer
