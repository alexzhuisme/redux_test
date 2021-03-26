import {DECREMENT, INCREMENT} from "./constant";
// import store from "./store";

export const createIncrementAction = data => ({type: INCREMENT, data});

export const createDecrementAction = data => ({type: DECREMENT, data});

export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        },time)
    }
}