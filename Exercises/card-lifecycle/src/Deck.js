import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: null,
      cards_drawn: []
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }

  async getCard() {
    let id = this.state.deck.deck_id;
    try {
      let card_url = `${API_BASE_URL}/${id}/draw/`;
      let response = await axios.get(card_url);
      if (!response.data.success) {
        throw new Error("No Cards Remaining");
      }
      let card = response.data.cards[0];
      this.setState(st => ({
        cards_drawn: [
          ...st.cards_drawn,
          {
            name: `${card.value} of ${card.suit}`,
            id: card.code,
            image: card.image
          }
        ]
      }));
    } catch (e) {
      alert(e);
    }
  }

  render() {
    let cards = this.state.cards_drawn.map(c => (
      <Card name={c.name} image={c.image} key={c.id} />
    ));
    return (
      <div className="Deck">
        <h1 className="Deck-title">Card Dealer</h1>
        <h2 className="Deck-title subtitle">React demo</h2>
        <button className="Deck-btn" onClick={this.getCard}>
          Get Card
        </button>
        <div className="Deck-cards">{cards}</div>
      </div>
    );
  }
}
