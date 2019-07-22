import React, {Component} from "react";
import {connect} from "react-redux";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import {setAmount} from './actions';


class App extends Component {

   dispatchButtonClick=(e)=> {
        const amount = parseInt(e.target.dataset.amount);
       this.props.setAmount(amount);
    };

    render() {

        return (
            <div className="App">
                <img className="App__userpic" src={photographer} alt="user"/>
                <p className="App__username">Hello, {this.props.username}! </p>
                <div className="App__amount">
                    {formatNumber({prefix: "$"})(this.props.amount)}
                    <p className="App__amount--info">Total Amount</p>
                </div>

                <section className="App__buttons">
                    <button data-amount="10000" onClick={this.dispatchButtonClick}>WITHDRAW $10,000</button>
                    <button data-amount="5000" onClick={this.dispatchButtonClick}>WITHDRAW $5,000</button>
                </section>

                <p className="App__giveaway">Give away all your cash to charity</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        amount:state.amount
    }
}

export default connect(
    mapStateToProps,
    {setAmount}
)(App);

