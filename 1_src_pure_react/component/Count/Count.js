import React, {Component} from 'react';

class Count extends Component {

    state = {count:0}

    addNumber = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count+value*1})
    }

    minusNumber = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count-value*1})
    }

    addIfOdd = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        if(count % 2 !== 0) {
            this.setState({count: count+value*1})
        }
    }

    addAsync = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(() => {
            this.setState({count: count+value*1})
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>Sum is:{this.state.count}</h1>
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