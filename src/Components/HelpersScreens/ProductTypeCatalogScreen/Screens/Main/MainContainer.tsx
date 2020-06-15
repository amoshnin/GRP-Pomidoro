// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "../../../../../Redux/ReduxStore"
import { getCertainMenuGroupProductDataThunkCreator } from "~/Redux/Reducers/FoodListReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
  CertainGroupProductData: any
}

type MapDispatchToPropsType = {
  getCertainMenuGroupProductDataThunkCreator: (groupId: number) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
    CertainGroupProductData: state.FoodListState.CertainGroupProductData,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getCertainMenuGroupProductDataThunkCreator: getCertainMenuGroupProductDataThunkCreator,
    }
  )
)(Main)

export default MainContainer
