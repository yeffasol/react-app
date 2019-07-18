import React, {Component} from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import {store} from "./store";

class App extends Component {

    render() {
        //With React 16, you don’t have to wrap adjacent JSX elements in a div.
        // You can use an array if you want — but pass in a key prop to each element in the array.
        return [
            <HelloWorld key={1} tech={store.getState().tech}/>,
            <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]}/>
        ]
    }
}

export default App;
