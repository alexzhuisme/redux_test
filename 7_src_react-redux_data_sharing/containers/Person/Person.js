import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addOnePpl(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
        // console.log(personObj)
    }

    render() {
        return (
            <div>
                <h2>People Group, sum is {this.props.totalSum}</h2>
                <input ref={c=>this.nameNode=c} type="text" placeholder='input name'/>
                <input ref={c=>this.ageNode=c} type="text" placeholder='input age'/>
                <button onClick={this.addPerson}>Add</button>
                <ul>
                    {
                        this.props.ppls.map((p) => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default connect(state => ({ppls:state.ppl,totalSum:state.sums}),
    {addOnePpl:createAddPersonAction})(Person);