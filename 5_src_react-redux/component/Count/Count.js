import React, {Component} from 'react';
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
                <h1>Sum is: {this.props.count}</h1>
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