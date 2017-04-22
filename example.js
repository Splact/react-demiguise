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
        loop: true
      })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-demiguise":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9SZXBvc2l0b3JpZXMvcmVhY3QtZGVtaWd1aXNlL2V4YW1wbGUvc3JjL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRTNDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUMxQixRQUFNLEVBQUMsa0JBQUc7QUFDUixRQUFJLFFBQVEsR0FBRyxDQUNiLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLGdCQUFnQixFQUNoQiwyQkFBMkIsRUFDM0IsaUJBQWlCLEVBQ2pCLCtCQUErQixFQUMvQixzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLG1CQUFtQixDQUNwQixDQUFDOztBQUVGLFFBQUksTUFBTSxHQUFHLENBQ1gsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDOztBQUVGLFdBQ0U7O1FBQUssU0FBUyxFQUFDLG1CQUFtQjtNQUNoQyxvQkFBQyxTQUFTO0FBQ1IsZ0JBQVEsRUFBRyxRQUFRLEFBQUU7QUFDckIsYUFBSyxFQUFHLE1BQU0sQUFBRTtBQUNoQixZQUFJLE1BQUE7UUFDSjtLQUNFLENBQ047R0FDSDtDQUNGLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxudmFyIERlbWlndWlzZSA9IHJlcXVpcmUoJ3JlYWN0LWRlbWlndWlzZScpO1xyXG5cclxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgdmFyIG1lc3NhZ2VzID0gW1xyXG4gICAgICAnQWJyYSBjYWRhYnJhIGZsaXBlbmRvJyxcclxuICAgICAgJ01hY2Fyb25pIHRvcnRlbGxpbmknLFxyXG4gICAgICAnTGlnaHRzYWJlciBuaW50ZW5kbycsXHJcbiAgICAgICdBbGFiaWYgc2hhemFtIScsXHJcbiAgICAgICdTYWxhbWkgYnJvY2NvbGkgYmFsbGVyaW5hJyxcclxuICAgICAgJ0dldGggcGFjZSBTdGFyaycsXHJcbiAgICAgICdadWNjaGluaSBmcmVzY28gcGl6emEgdG9tYm9sYScsXHJcbiAgICAgICdUb3J0ZWxsaW5pIHBhcGFyYXp6aScsXHJcbiAgICAgICdEYXJ0aCBhbGdvcml0aG0gamVkaScsXHJcbiAgICAgICdNb3p6YXJlbGxhIGZyaXR0aScsXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBkZWxheXMgPSBbXHJcbiAgICAgIDE1MDAsXHJcbiAgICAgIDEwMDAsXHJcbiAgICAgIDI1MDAsXHJcbiAgICAgIDgwMCxcclxuICAgICAgMzAwMCxcclxuICAgICAgMTAwMCxcclxuICAgICAgNDAwMCxcclxuICAgICAgMjAwMCxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1pZ3Vpc2UtZXhhbXBsZVwiPlxyXG4gICAgICAgIDxEZW1pZ3Vpc2VcclxuICAgICAgICAgIG1lc3NhZ2VzPXsgbWVzc2FnZXMgfVxyXG4gICAgICAgICAgZGVsYXk9eyBkZWxheXMgfVxyXG4gICAgICAgICAgbG9vcFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiJdfQ==
