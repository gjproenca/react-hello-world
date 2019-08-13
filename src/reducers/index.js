import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const reducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
})

export default reducers;