import React, { Component } from "react";
import { choice } from "./helper";
import Coin from "./Coin";
export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/en/8/8a/Quarter_Obverse_2010.png"
      },
      {
        side: "tails",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/en/3/37/Quarter_Reverse_2010.png"
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.flipCoin();
  }
  flipCoin() {
    let newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currentCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
        numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip a Coin</h2>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button onClick={this.handleClick}>Flip the coin</button>
        <p>
          Out of {this.state.numFlips} flips, there were {this.state.numHeads}{" "}
          number of heads, and {this.state.numTails} number of tails.
        </p>
      </div>
    );
  }
}
export default CoinContainer;
