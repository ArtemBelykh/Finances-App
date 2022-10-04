import {combineReducers} from "redux";
import {scoresReducer} from "./Reducers/scoresReducer"
import {recordsReducer} from "./Reducers/recordsReducer"
import {purposesReducer} from "./Reducers/purposesReducer"
import {budgetReducer} from "./Reducers/budgetReducer"

export const rootReducer = combineReducers({
    scoresReducer,
    recordsReducer,
    purposesReducer,
    budgetReducer
})