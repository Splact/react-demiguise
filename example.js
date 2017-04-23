require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Demiguise = require('react-demiguise');

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    var messages = ['Abra cadabra flipendo', 'Macaroni tortellini', 'Lightsaber nintendo', 'Alabif shazam!', 'Salami broccoli ballerina', 'Geth pace Stark', 'Zucchini fresco pizza tombola', 'Tortellini paparazzi', 'Darth algorithm jedi', 'Mozzarella fritti'];

    var delays = [1500, 1000, 2500, 800, 3000, 1000, 4000, 2000];

    return React.createElement(
      'div',
      { className: 'demiguise-example' },
      React.createElement(Demiguise, {
        messages: messages,
        delay: delays,
        loop: true,
        style: { height: '50%' }
      })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-demiguise":undefined,"react-dom":undefined}]},{},[1]);
