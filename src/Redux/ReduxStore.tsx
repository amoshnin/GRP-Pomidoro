// REDUX IMPORTS //
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// REDUCERS IMPORTS //
import PizzaConstructorReducer from "~/Redux/Reducers/PizzaConstructorReducer"
import FoodListReducer from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"
import OrderingReducer from "~/Redux/Reducers/OrderingReducer"

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({
  // Ordering Reducer
  OrderingState: OrderingReducer,

  // Food List Reducer
  FoodListState: FoodListReducer,

  // Pizza constructor reducer
  PizzaConstructorState: PizzaConstructorReducer,
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
