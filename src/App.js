import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";

class App extends Component {

    render() {
        return (
            <Fragment>
                <HelloWorld tech={this.props.technology}/>
                <ButtonGroup technologies={["React", "Elm", "React-redux"]}/>
            </Fragment>
        )

    }
}

function mapStateToProps(state) {
    return {
        technology: state.technology
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
