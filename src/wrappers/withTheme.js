import React, { Component } from "react";
import qs from 'qs';
import scssVariables from "./../assets/css/Style.scss";

const withTheme = WrappedComponent => {

    /**
     * 
     * get query string in url
     *  
     */
    const search = window.location.search.replace("?", "");

    /**
     * 
     * parse query string to object
     * 
     */
    const queryString = qs.parse(search);

    /**
     * 
     * theme name : set theme name from query string, or localstorage, or static theme name
     * 
     */
    const theme = queryString.theme || localStorage.getItem("theme") || "light";

    if (queryString.theme)
        localStorage.setItem("theme", theme);

    return class extends Component {
        render() {
            return (
                <WrappedComponent
                    themeName={theme}
                    {...this.props}
                />
            );
        }
    };
};

/**
 * get one of variable from scss variables
 * @param {"backgroundColor"} varName scss variable name
 */
const getScssVariable = (varName) => {

    return scssVariables[`${withTheme.theme}_${varName}`]
}

export { withTheme, getScssVariable };