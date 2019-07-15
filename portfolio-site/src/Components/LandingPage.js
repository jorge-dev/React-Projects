import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import me from "../images/me.png";
export class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={me} alt="avatar" className="me-img" />
            <div className="banner-text">
              <h1>My Portfolio</h1>
              <hr />
              <p>Stuff | More Stuff | Stuff | More Stuff | </p>

              <div className="social-links">
                {/*Linkedin*/}
                <a
                  href="https://google.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className=" fab fa-linkedin"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                {/*Github*/}
                <a
                  href="https://google.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className=" fab fa-github"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
