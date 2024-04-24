import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";

export const store = createStore(
          combineReducers({
                    app: appReducer
          }),
)