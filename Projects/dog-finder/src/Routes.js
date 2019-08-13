import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogInfo from "./DogInfo";
export default class Routes extends Component {
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogInfo {...props} dog={currDog} />;
    };
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}
