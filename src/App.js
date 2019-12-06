import React, { Component } from 'react';
import { withTheme, getScssVariable } from "./withTheme";
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props)
    /**
     * 
     * get theme name from whithTheme wrapper
     * 
     */
    const themeName = props.themeName;

    this.state = {
      theme: "theme-" + themeName,
      themeName,
    }
  }

  /**
   * 
   * switch betweeb light and dark theme
   * 
   */
  changeTheme = () => {
    let { theme, themeName } = this.state;

    /**
     * 
     * conditional between themes
     * 
     */
    if (theme === "theme-dark") {
      theme = "theme-light";
      themeName = "light";
    } else {
      theme = "theme-dark"
      themeName = "dark";
    }

    /**
     * save current theme to localstorage
     */
    localStorage.setItem("theme", themeName);

    this.setState({
      theme,
      themeName
    })
  }
  render() {
    const { theme, themeName } = this.state;
    return (
      <div className={["App", theme].join(" ")}>
        <header className="App-header">
          {/* image */}
          <img src={logo} className="App-logo" alt="logo" />
          {/* description */}
          <p className="description">
            قالب سایت به صورت داینامیک
          </p>
          <p className="description">
            <bdi>قالب جاری '{themeName}'</bdi>
          </p>
          {/* link */}
          <a
            style={{ color: getScssVariable("backgroundColor") }}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          {/* button */}
          <button className="btn-custom" onClick={this.changeTheme}>تغییر قالب</button>
        </header>
      </div>
    );
  }

}

export default withTheme(App);
