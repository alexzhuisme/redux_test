import count from './count'
import person from "./person";
import {combineReducers} from "redux";

const allReducer = combineReducers({
    count,
    person
})

export default allReducer