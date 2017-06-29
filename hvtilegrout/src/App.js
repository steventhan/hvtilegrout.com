import React, { Component } from "react";
import { getMuiTheme, MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import theme from "./theme";
import NavigationBar from "./components/menus/NavigationBar";
import "./App.css";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="App">
          <NavigationBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
