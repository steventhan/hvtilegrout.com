import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { FloatingActionButton } from "material-ui";

import { menuLinks } from "./NavigationMenu";
import SectionHeaderText from "./SectionHeaderText";
import "./Footer.css";
import info from "../../business-info.json";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="footer">
          <div className="container">
            <div className="inquiry">
              <SectionHeaderText text="Ready to inquire ?" textSize="1.3em" />
              <a href={`tel:${info.phone}`}><h4>{info.phone}</h4></a>
              <Link to={menuLinks[3].url}><h4>Contact us</h4></Link>
            </div>
            <div className="our-company">
              <SectionHeaderText text="Our company" textSize="1.3em" />
              <Link to={menuLinks[1].url}><h4>About us</h4></Link>
              <Link to={menuLinks[0].url}><h4>Careers</h4></Link>
              <Link to="/privacy-policy"><h4>Privacy policy</h4></Link>
            </div>
            <div className="stay-in-touch">
              <SectionHeaderText text="Stay in touch" textSize="1.3em" />
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
