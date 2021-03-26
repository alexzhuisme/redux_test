import React, {Component} from 'react';
import store from "../../redux/store";
class Count extends Component {

    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    addNumber = () => {
        const {value} = this.selectNumber
        store.dispatch({type:'increment',data:value*1})
    }

    minusNumber = () => {
        const {value} = this.selectNumber
        store.dispatch({type:'decrement',data:value*1})
    }

    addIfOdd = () => {
        const {value} = this.selectNumber
        if(store.getState() % 2 !== 0) {
            store.dispatch({type:'increment',data:value*1})
        }
    }

    addAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch({type:'increment',data:value*1})
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>Sum is: {store.getState()}</h1>
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

export default Count;