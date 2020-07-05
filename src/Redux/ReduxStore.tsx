// REDUX IMPORTS //
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// REDUCERS IMPORTS //
import PrivateCabinetGetReducer from "~/Redux/Reducers/PrivateCabinetReducers/PrivateCabinerGetReducer"
import OrderingSetReducer from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"
import FoodListGetReducer from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"
import PizzaConstructorSetReducer from "~/Redux/Reducers/PizzaConstructorReducers/PizzaConstructorSetReducer"

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({
  // Private cabinet
  PrivateCabinetGetState: PrivateCabinetGetReducer,

  // Ordering Reducer
  OrderingSetState: OrderingSetReducer,

  // Food List Reducer
  FoodListGetState: FoodListGetReducer,

  // Pizza constructor reducer
  PizzaConstructorSetState: PizzaConstructorSetReducer,
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

const composeEnhancers = compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
