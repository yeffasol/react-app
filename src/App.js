import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux"; //an import from the redux library

const initialState = { tech: "Marat" };

const store = createStore(reducer,initialState);

class App extends Component {

  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
