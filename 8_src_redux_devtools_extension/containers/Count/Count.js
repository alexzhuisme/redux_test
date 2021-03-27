// import CountUI from '../../component/Count/Count'
import React, {Component} from "react";
import {connect} from 'react-redux'
import {createIncrementAction} from "../../redux/actions/count";
import {createDecrementAction} from "../../redux/actions/count";
import {createIncrementAsyncAction} from "../../redux/actions/count";

class Count extends Component {

    addNumber = () => {
        const {value} = this.selectNumber
        this.props.addNumber(value*1)
    }

    minusNumber = () => {
        const {value} = this.selectNumber
        this.props.minusNumber(value*1)
    }

    addIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.addNumber(value*1)
        }
    }

    addAsync = () => {
        const {value} = this.selectNumber
        this.props.addAsync(value*1,500)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Sum is: {this.props.count},total people: {this.props.pplSum}</h1>
                <select ref={c => this.selectNumber = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.addNumber}>+</button>
                <button onClick={this.minusNumber}>-</button>
                <button onClick={this.addIfOdd}>increment when odd</button>
                <button onClick={this.addAsync}>increment async</button>
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {count: state}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNumber: (number) => {dispatch(createIncrementAction(number))},
//         minusNumber: (number) => {dispatch(createDecrementAction(number))},
//         addAsync: (number,time) => {dispatch(createIncrementAsyncAction(number,time))}
//
//     }
// }

const CountContainer = connect(
    state => ({count:state.sums,pplSum:state.ppl.length}),
    {
        addNumber: (createIncrementAction),
        minusNumber: (createDecrementAction),
        addAsync: (createIncrementAsyncAction)
    }
)(Count)

export default CountContainer