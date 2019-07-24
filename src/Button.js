import React from 'react';
import {ThemeContext} from './theme-context'

export default function () {

    return (

        <ThemeContext.Consumer>
            {({ themeColor, changeThemeColor }) => (
                <button style={{background: themeColor}} onClick={changeThemeColor.bind(this,'red')}>change</button>
            )}
        </ThemeContext.Consumer>

    )
}
