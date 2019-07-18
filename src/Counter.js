import React from 'react';
import './Counter.css';
// import Store from './store';

import createStore from './redux';

const initialState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.amount};
        case "DECREMENT":
            return {count: state.count - action.amount};
        case "RESET":
            return {count: 0};
        default :
            return state;
    }

}

const incrementAction = {type: "INCREMENT", amount: 1};


const decrementAction = {type: "DECREMENT", amount: 1};

const resetAction = {type: "RESET"};

const store = createStore(reducer, initialState);

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    increment() {
        store.dispatch(incrementAction);
    }

    decrement() {
        store.dispatch(decrementAction);
    }

    reset() {
        store.dispatch(resetAction);
    }

    render() {
        const count = store.getState().count;
        return (
            <div className="counter">
                <div className="counter__center">
                    <span className="counter__count">{count}</span>

                    <div className="counter__buttons">
                        <button className="counter__button counter__decrement" onClick={this.decrement}>-</button>
                        <button className="counter__button button-outline counter__reset" onClick={this.reset}>R</button>
                        <button className="counter__button counter__increment" onClick={this.increment}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}



