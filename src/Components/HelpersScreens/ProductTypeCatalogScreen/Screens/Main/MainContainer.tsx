// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"
import { getCertainCategoryFoodsListThunkCreator } from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  CurrentCategoryFoodsList: Array<any>
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
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    CurrentCategoryFoodsList: state.FoodListGetState.CurrentCategoryFoodsList,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      getCertainCategoryFoodsListThunkCreator: getCertainCategoryFoodsListThunkCreator,
    }
  )
)(Main)

export default MainContainer
