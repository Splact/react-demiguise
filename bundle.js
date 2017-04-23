require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-demiguise":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flexDirection: column;\n  justifyContent: center;\n  alignItems: center;\n\n  width: 100%;\n  height: 100%;\n\n  transition: opacity 1.5s ease-in;\n  opacity: ', ';\n'], ['\n  display: flex;\n  flexDirection: column;\n  justifyContent: center;\n  alignItems: center;\n\n  width: 100%;\n  height: 100%;\n\n  transition: opacity 1.5s ease-in;\n  opacity: ', ';\n']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var Container = _styledComponents2['default'].div(_templateObject, function (props) {
  return props.hidden ? 0 : 1;
});

var Demiguise = (function (_Component) {
  _inherits(Demiguise, _Component);

  function Demiguise(props) {
    _classCallCheck(this, Demiguise);

    _get(Object.getPrototypeOf(Demiguise.prototype), 'constructor', this).call(this, props);

    this.state = {
      currentMessage: null,
      isMessageHidden: true
    };

    // binding Methods
    this.setNextMessage = this.setNextMessage.bind(this);
    this.transitionEndHandler = this.transitionEndHandler.bind(this);
  }

  /* React Lifecycle */

  _createClass(Demiguise, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var messages = this.props.messages;

      if (messages.length > 0) {
        this.messageIndex = -1;
        this.setNextMessage();
      }
    }

    /* Internal Methods */
  }, {
    key: 'setNextMessage',
    value: function setNextMessage() {
      var _this = this;

      var currentMessage = this.state.currentMessage;
      var _props = this.props;
      var messages = _props.messages;
      var delay = _props.delay;
      var loop = _props.loop;

      this.messageIndex = this.messageIndex + 1;

      if (this.messageIndex === messages.length) {
        this.messageIndex = loop ? 0 : -1;
      }

      if (this.messageIndex >= 0) {
        if (!!currentMessage) {
          this.setState({
            nextMessage: messages[this.messageIndex],
            isMessageHidden: true
          });
        } else {
          setTimeout(function () {
            _this.setState({
              currentMessage: messages[_this.messageIndex],
              isMessageHidden: false
            });
          }, 200);
        }
      }
    }
  }, {
    key: 'transitionEndHandler',
    value: function transitionEndHandler() {
      var delay = this.props.delay;
      var _state = this.state;
      var currentMessage = _state.currentMessage;
      var isMessageHidden = _state.isMessageHidden;
      var nextMessage = _state.nextMessage;

      // if message is now hidden
      if (isMessageHidden) {
        // we can swap text and show
        this.setState({
          currentMessage: nextMessage,
          nextMessage: null,
          isMessageHidden: false
        });
      } else {
        // we can set next message
        var messageDelay = delay || 3000;
        if (Array.isArray(delay)) {
          messageDelay = delay.length > this.messageIndex ? delay[this.messageIndex] : delay[delay.length - 1];
        }
        setTimeout(this.setNextMessage, messageDelay);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state;
      var currentMessage = _state2.currentMessage;
      var isMessageHidden = _state2.isMessageHidden;

      return _react2['default'].createElement(
        Container,
        {
          hidden: isMessageHidden,
          onTransitionEnd: this.transitionEndHandler },
        currentMessage
      );
    }
  }]);

  return Demiguise;
})(_react.Component);

Demiguise.propTypes = {
  messages: _react.PropTypes.arrayOf(_react.PropTypes.string),
  delay: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
  loop: _react.PropTypes.bool
};
Demiguise.defaultProps = {
  messages: [],
  delay: 3000,
  loop: false
};

exports['default'] = Demiguise;
module.exports = exports['default'];

},{"react":undefined,"styled-components":undefined}]},{},[]);
