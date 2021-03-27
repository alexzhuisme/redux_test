// import CountUI from '../../component/Count/Count'
import React, {Component} from "react";
import {connect} from 'react-redux'
import {increment} from "../../redux/actions/count";
import {decrement} from "../../redux/actions/count";
import {incrementAsync} from "../../redux/actions/count";

class Count extends Component {

    addNumber = () => {
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }

    minusNumber = () => {
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }

    addIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value*1)
        }
    }

    addAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Sum is: {this.props.count},total people: {this.props.personCount}</h1>
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
    state => ({count:state.count,personCount:state.person.length}),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)

export default CountContainer