import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.add}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtract}  />
                <hr/>
                <button onClick={()=>this.props.storeResult(this.props.ctr)}>store result</button>
                <ul>
                    {this.props.result.map(res => (<li key={res.id} onClick={()=>this.props.handleDelete(res.id)}>{res.value}</li>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        result: state.res.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        add: () => dispatch({type: 'ADD'}),
        subtract: () => dispatch({type: 'SUBTRACT'}),
        storeResult: (res) => dispatch({type: 'STORE_RESULT', payload: {res: res}}),
        handleDelete: (id) => dispatch({type: 'DELETE', payload: {id: id}})

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
