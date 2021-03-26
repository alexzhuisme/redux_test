import CountUI from '../../component/Count/Count'
// import store from '../../redux/store'
import {connect} from 'react-redux'
import {createIncrementAction} from "../../redux/count_action";
import {createDecrementAction} from "../../redux/count_action";
import {createIncrementAsyncAction} from "../../redux/count_action";


const mapStateToProps = (state) => {
    return {count: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number) => {dispatch(createIncrementAction(number))},
        minusNumber: (number) => {dispatch(createDecrementAction(number))},
        addAsync: (number,time) => {dispatch(createIncrementAsyncAction(number,time))},

    }
}

const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer