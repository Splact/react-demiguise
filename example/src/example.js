var React = require('react');
var ReactDOM = require('react-dom');
var Demiguise = require('react-demiguise');

var App = React.createClass({
  render () {
    var messages = [
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

    var delays = [
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
        />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
