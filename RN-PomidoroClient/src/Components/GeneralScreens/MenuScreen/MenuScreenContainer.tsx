// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MenuScreen from "./MenuScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"
import { getMenuListThunkCreator } from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"
import { getSalesListThunkCreator } from "~/Redux/Reducers/ExtraInfoReducers/ExtraInfoGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  MenuList: Array<any>
  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>
}

type MapDispatchToPropsType = {
  getMenuListThunkCreator: () => void
  getSalesListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    MenuList: state.FoodListGetState.MenuList,
    SalesList: state.ExtraInfoGetState.SalesList,
  }
}

const MenuScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getMenuListThunkCreator: getMenuListThunkCreator,
      getSalesListThunkCreator: getSalesListThunkCreator,
    }
  )
)(MenuScreen)

export default MenuScreenContainer
