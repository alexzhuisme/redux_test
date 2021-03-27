import {createStore,applyMiddleware,combineReducers} from "redux";
import countReducer from './reducers/count'
import personReducer from "./reducers/person";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";


const allReducer = combineReducers({
    sums: countReducer,
    ppl: personReducer
})

const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store