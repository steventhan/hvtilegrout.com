import React, { Component } from "react";
import { getMuiTheme, MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import theme from "./theme";
import { NavigationMenu, Footer } from "./components/menus/";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import GalleryPage from "./components/gallery/GalleryPage";
import ContactPage from "./components/contact/ContactPage";
import ScrollToTop from "./components/utils/ScrollToTop";

import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <BrowserRouter>
          <ScrollToTop>
            <div>
              <NavigationMenu />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Footer />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
