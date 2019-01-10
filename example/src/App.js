import React, { Component } from 'react';

import Demiguise from 'react-demiguise';

export default class App extends Component {
  state = {
    loop: 1,
  };

  onLoopEnd = () => {
    console.log(`Loop ${this.state.loop} ended`);

    this.setState({
      loop: this.state.loop + 1,
    });
  }

  render () {
    const messages = [
      'Abra cadabra flipendo',
      'Macaroni tortellini',
      'Lightsaber nintendo',
      'Alabif shazam!',
      'Salami broccoli ballerina',
      'Geth pace Stark',
      'Zucchini fresco pizza tombola',
      'Tortellini paparazzi',
      'Darth algorithm jedi',
      'Mozzarella fritti',
    ];

    const delays = [
      1500,
      1000,
      2500,
      800,
      3000,
      1000,
      4000,
      2000,
    ];

    return (
      <div className="demiguise-example">
        <Demiguise
          messages={ messages }
          delay={ delays }
          loop
          onLoopEnd={ this.onLoopEnd }
        />
      </div>
    );
  }
}
