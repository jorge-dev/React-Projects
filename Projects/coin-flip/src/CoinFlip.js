import React, { Component } from "react";
export class CoinFlip extends Component {
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
  }
  // dsfvsdfsdfsdadefradefr
  render() {
    return (
      <div className="CoinFlip">
        <h2>Let's Flip a Coin</h2>
        <p>
          Out of {this.state.numFlips} flips, {this.state.numHeads}, and
          {this.state.numTails}
        </p>
      </div>
    );
  }
}
export default CoinFlip;
