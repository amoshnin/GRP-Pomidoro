// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MainScreen from "./MainScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"
import {
  getMenuListThunkCreator,
  getCertainCategoryFoodsListThunkCreator,
} from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"
import { getSalesListThunkCreator } from "~/Redux/Reducers/ExtraInfoReducers/ExtraInfoGetReducer"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  CurrentCategoryFoodsList: Array<any>

  MenuList: Array<any>
  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>
}

type MapDispatchToPropsType = {
  getCertainCategoryFoodsListThunkCreator: (
    rawId: string,
    limit?: string
  ) => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
  getMenuListThunkCreator: () => void
  getSalesListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    MenuList: state.FoodListGetState.MenuList,
    SalesList: state.ExtraInfoGetState.SalesList,
    CurrentCategoryFoodsList: state.FoodListGetState.CurrentCategoryFoodsList,
  }
}

const MainScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      getMenuListThunkCreator: getMenuListThunkCreator,
      getSalesListThunkCreator: getSalesListThunkCreator,
      getCertainCategoryFoodsListThunkCreator: getCertainCategoryFoodsListThunkCreator,
    }
  )
)(MainScreen)

export default MainScreenContainer
