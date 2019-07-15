import React from "react";

import "./App.css";
import Main from "./Components/main";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
function App() {
  return (
    <div>
      <Layout>
        <Header
          className="header-color"
          title={
            <span>
              <strong>The Title</strong>
            </span>
          }
        >
          <Navigation>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
