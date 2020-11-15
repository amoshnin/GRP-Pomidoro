// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import MainScreen from "./MainScreen"

// EXTRA IMPORTS //
import { AppStateType } from "../../../Redux/ReduxStore"
import {
  getMenuListThunkCreator,
  getStaticCategoryFoodsListThunkCreator,
} from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"
import { getSalesListThunkCreator } from "~/Redux/Reducers/ExtraInfoReducers/ExtraInfoGetReducer"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  StaticFoodCategoryList: Array<any>

  MenuList: Array<any>
  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>
}

type MapDispatchToPropsType = {
  getStaticCategoryFoodsListThunkCreator: () => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>,
    id: string
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
    StaticFoodCategoryList: state.FoodListGetState.StaticFoodCategoryList,
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
      getStaticCategoryFoodsListThunkCreator,
    }
  )
)(MainScreen)

export default MainScreenContainer
