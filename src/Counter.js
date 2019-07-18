import React from 'react';
import './Counter.css';
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


function increment(amount) {
    return {type: "INCREMENT", amount};
}

function decrement(amount) {
    return {type: "DECREMENT", amount};
}

function reset() {
    return {type: "RESET"};
}

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
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(increment(amount));
    }

    decrement() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(decrement(amount));
    }

    reset() {
        store.dispatch(reset());
    }

    render() {
        const count = store.getState().count;
        return (
            <div className="counter">
                <div className="counter__center">
                    <span className="counter__count">{count}</span>

                    <div className="counter__buttons">
                        <button className="counter__button counter__decrement" onClick={this.decrement}>-</button>
                        <button className="counter__button button-outline counter__reset" onClick={this.reset}>R
                        </button>
                        <button className="counter__button counter__increment" onClick={this.increment}>+</button>
                    </div>
                    <input type="text" ref="amount" defaultValue="2"/>
                </div>
            </div>
        );
    }
}



