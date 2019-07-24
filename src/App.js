import React from 'react';
import './App.css';
import Button from './Button';
import {ThemeContext} from './theme-context'

class App extends React.Component {
    state = {
        themeColor: '#55aa77'
    }

    changeThemeColor = (newColor) => {
        this.setState({
            themeColor: newColor
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                themeColor: this.state.themeColor,
                changeThemeColor: this.changeThemeColor
            }}>

                    <Button />

            </ThemeContext.Provider>


        );
    }

}

export default App;
