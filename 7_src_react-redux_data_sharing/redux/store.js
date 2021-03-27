import {createStore,applyMiddleware,combineReducers} from "redux";
import countReducer from './reducers/count'
import personReducer from "./reducers/person";
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    sums: countReducer,
    ppl: personReducer
})

const store = createStore(allReducer,applyMiddleware(thunk))

export default store