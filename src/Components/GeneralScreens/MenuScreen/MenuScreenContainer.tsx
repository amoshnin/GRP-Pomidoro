// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MenuScreen from "./MenuScreen"

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

const MenuScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getMenuListThunkCreator: getMenuListThunkCreator,
    }
  )
)(MenuScreen)

export default MenuScreenContainer
