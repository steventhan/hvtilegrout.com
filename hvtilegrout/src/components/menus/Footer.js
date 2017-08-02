import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { FloatingActionButton } from "material-ui";

import "./Footer.css";
import info from "../../business-info.json";
import { menuLinks } from "./NavigationMenu";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="footer">
          <div className="container">
            <div className="inquiry">
              <h1 className="section-header-text">Ready to inquire ?</h1>
              <a href={`tel:${info.phone}`}><h4>{info.phone}</h4></a>
              <a href={menuLinks[3].url}><h4>Contact us</h4></a>
            </div>
            <div className="our-company">
              <h1 className="section-header-text">Our company</h1>
              <a href={menuLinks[1].url}><h4>About us</h4></a>
              <a href={menuLinks[0].url}><h4>Careers</h4></a>
              <a href="/privacy-policy"><h4>Privacy policy</h4></a>
            </div>
            <div className="stay-in-touch">
              <h1 className="section-header-text">Stay in touch</h1>
              <p>
                We would appreciate any feedback that you can provide.
                Pick your favorite social media and let us know how we are doing.
              </p>
              <FloatingActionButton mini href="http://facebook.com">
                <FontAwesome name="facebook" className="facebook-f" />
              </FloatingActionButton>
              &nbsp;
              &nbsp;
              <FloatingActionButton mini href="http://google.com">
                <FontAwesome name="google" className="google" />
              </FloatingActionButton>
              &nbsp;
              &nbsp;
              <FloatingActionButton mini href="http://yelp.com">
                <FontAwesome name="yelp" className="yelp" />
              </FloatingActionButton>
            </div>
          </div>
        </section>
        <section className="copyright">
          <p>&copy; HV Tile Grout 2017</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
