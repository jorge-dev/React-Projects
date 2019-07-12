import React from "react";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Content from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import { Switch, Route } from "react-router-dom";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/AboutMe" component={AboutMe} />
    <Route path="/Content" component={Content} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Resume" component={Resume} />
  </Switch>
);

export default Main;
