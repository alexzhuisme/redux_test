const initState = 0
function countReducer(prevState = initState,action){
    // if (prevState === undefined) prevState = 0
    // console.log(prevState,action)
    const {type,data} = action
    switch (type) {
        case 'increment':
            return prevState + data
        case 'decrement':
            return prevState - data
        default:
            return prevState
    }
}

export default countReducer