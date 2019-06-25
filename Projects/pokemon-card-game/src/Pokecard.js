import React, { Component } from "react";
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
export default class Pokecard extends Component {
  render() {
      LET imgSrc = `${POKE_API}`
    return (
      <div className ="Pokecard">
        <h1>{this.class.name}</h1>
      </div>
    );
  }
}
