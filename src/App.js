import React, {Component} from "react";
import {createStore} from 'redux';
import reducer from './reducers';
import user from "./images/user.png";
import "./App.css";

const initialState = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "Kazan"
};
const store = createStore(reducer, initialState);

class App extends Component {
    state = store.getState();

    render() {
        const {name, description, likes, location} = this.state;
        return (
            <div className="App">
                <section className="User__img">
                    <img src={user} alt="user"/>
                </section>

                <section className="User__info">
                    <p>
                        {" "}
                        <span className="faint">I am</span> a {description}
                    </p>
                    <p>
                        {" "}
                        <span className="faint">I like</span> {likes}
                    </p>

                    <p className="User__info__details User__info__divider faint">
                        <span>Name: </span>
                        <span>{name}</span>
                    </p>
                    <p className="User__info__details faint">
                        <span>Location: </span>
                        <span>{location}</span>
                    </p>
                </section>
            </div>
        );
    }
}

export default App;
