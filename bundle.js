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

},{"react":undefined,"styled-components":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9SZXBvc2l0b3JpZXMvcmVhY3QtZGVtaWd1aXNlL3NyYy9EZW1pZ3Vpc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBNEMsT0FBTzs7OztnQ0FDaEMsbUJBQW1COzs7O0FBR3RDLElBQU0sU0FBUyxHQUFHLDhCQUFPLEdBQUcsa0JBVWYsVUFBQSxLQUFLO1NBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztDQUFBLENBQ3pDLENBQUM7O0lBR0ksU0FBUztZQUFULFNBQVM7O0FBQ0YsV0FEUCxTQUFTLENBQ0QsS0FBSyxFQUFFOzBCQURmLFNBQVM7O0FBRVgsK0JBRkUsU0FBUyw2Q0FFTCxLQUFLLEVBQUU7O0FBRWIsUUFBSSxDQUFDLEtBQUssR0FBRztBQUNYLG9CQUFjLEVBQUUsSUFBSTtBQUNwQixxQkFBZSxFQUFFLElBQUk7S0FDdEIsQ0FBQzs7O0FBR0YsUUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRCxRQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUNsRTs7OztlQVpHLFNBQVM7O1dBZUksNkJBQUc7VUFDVixRQUFRLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBdkIsUUFBUTs7QUFFaEIsVUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN2QixZQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztPQUN2QjtLQUNGOzs7OztXQUdhLDBCQUFHOzs7VUFDUCxjQUFjLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBN0IsY0FBYzttQkFDWSxJQUFJLENBQUMsS0FBSztVQUFwQyxRQUFRLFVBQVIsUUFBUTtVQUFFLEtBQUssVUFBTCxLQUFLO1VBQUUsSUFBSSxVQUFKLElBQUk7O0FBRTdCLFVBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7O0FBRTFDLFVBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO0FBQ3pDLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztPQUNuQzs7QUFFRCxVQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO0FBQzFCLFlBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtBQUNwQixjQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osdUJBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN4QywyQkFBZSxFQUFFLElBQUk7V0FDdEIsQ0FBQyxDQUFDO1NBQ0osTUFBTTtBQUNMLG9CQUFVLENBQUMsWUFBTTtBQUNmLGtCQUFLLFFBQVEsQ0FBQztBQUNaLDRCQUFjLEVBQUUsUUFBUSxDQUFDLE1BQUssWUFBWSxDQUFDO0FBQzNDLDZCQUFlLEVBQUUsS0FBSzthQUN2QixDQUFDLENBQUM7V0FDSixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7T0FDRjtLQUNGOzs7V0FDbUIsZ0NBQUc7VUFDYixLQUFLLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBcEIsS0FBSzttQkFDNEMsSUFBSSxDQUFDLEtBQUs7VUFBM0QsY0FBYyxVQUFkLGNBQWM7VUFBRSxlQUFlLFVBQWYsZUFBZTtVQUFFLFdBQVcsVUFBWCxXQUFXOzs7QUFHcEQsVUFBSSxlQUFlLEVBQUU7O0FBRW5CLFlBQUksQ0FBQyxRQUFRLENBQUM7QUFDWix3QkFBYyxFQUFFLFdBQVc7QUFDM0IscUJBQVcsRUFBRSxJQUFJO0FBQ2pCLHlCQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDLENBQUM7T0FDSixNQUFNOztBQUVMLFlBQUksWUFBWSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDakMsWUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hCLHNCQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QjtBQUNELGtCQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztPQUMvQztLQUNGOzs7V0FFSyxrQkFBRztvQkFDcUMsSUFBSSxDQUFDLEtBQUs7VUFBOUMsY0FBYyxXQUFkLGNBQWM7VUFBRSxlQUFlLFdBQWYsZUFBZTs7QUFFdkMsYUFDRTtBQUFDLGlCQUFTOztBQUNSLGdCQUFNLEVBQUcsZUFBZSxBQUFFO0FBQzFCLHlCQUFlLEVBQUcsSUFBSSxDQUFDLG9CQUFvQixBQUFFO1FBQzNDLGNBQWM7T0FDTixDQUNaO0tBQ0g7OztTQXJGRyxTQUFTOzs7QUF3RmYsU0FBUyxDQUFDLFNBQVMsR0FBRztBQUNwQixVQUFRLEVBQUUsaUJBQVUsT0FBTyxDQUFDLGlCQUFVLE1BQU0sQ0FBQztBQUM3QyxPQUFLLEVBQUUsaUJBQVUsU0FBUyxDQUFDLENBQ3pCLGlCQUFVLE1BQU0sRUFDaEIsaUJBQVUsT0FBTyxDQUFDLGlCQUFVLE1BQU0sQ0FBQyxDQUNwQyxDQUFDO0FBQ0YsTUFBSSxFQUFFLGlCQUFVLElBQUk7Q0FDckIsQ0FBQztBQUNGLFNBQVMsQ0FBQyxZQUFZLEdBQUc7QUFDdkIsVUFBUSxFQUFFLEVBQUU7QUFDWixPQUFLLEVBQUUsSUFBSTtBQUNYLE1BQUksRUFBRSxLQUFLO0NBQ1osQ0FBQzs7cUJBRWEsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4RGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeUNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbkl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW47XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy5oaWRkZW4gPyAwIDogMX07XHJcbmA7XHJcblxyXG5cclxuY2xhc3MgRGVtaWd1aXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRNZXNzYWdlOiBudWxsLFxyXG4gICAgICBpc01lc3NhZ2VIaWRkZW46IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGJpbmRpbmcgTWV0aG9kc1xyXG4gICAgdGhpcy5zZXROZXh0TWVzc2FnZSA9IHRoaXMuc2V0TmV4dE1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIgPSB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiBSZWFjdCBMaWZlY3ljbGUgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSW5kZXggPSAtMTtcclxuICAgICAgdGhpcy5zZXROZXh0TWVzc2FnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogSW50ZXJuYWwgTWV0aG9kcyAqL1xyXG4gIHNldE5leHRNZXNzYWdlKCkge1xyXG4gICAgY29uc3QgeyBjdXJyZW50TWVzc2FnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgbWVzc2FnZXMsIGRlbGF5LCBsb29wIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHRoaXMubWVzc2FnZUluZGV4ID0gdGhpcy5tZXNzYWdlSW5kZXggKyAxO1xyXG5cclxuICAgIGlmICh0aGlzLm1lc3NhZ2VJbmRleCA9PT0gbWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUluZGV4ID0gbG9vcCA/IDAgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tZXNzYWdlSW5kZXggPj0gMCkge1xyXG4gICAgICBpZiAoISFjdXJyZW50TWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbmV4dE1lc3NhZ2U6IG1lc3NhZ2VzW3RoaXMubWVzc2FnZUluZGV4XSxcclxuICAgICAgICAgIGlzTWVzc2FnZUhpZGRlbjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZTogbWVzc2FnZXNbdGhpcy5tZXNzYWdlSW5kZXhdLFxyXG4gICAgICAgICAgICBpc01lc3NhZ2VIaWRkZW46IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB0cmFuc2l0aW9uRW5kSGFuZGxlcigpIHtcclxuICAgIGNvbnN0IHsgZGVsYXkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRNZXNzYWdlLCBpc01lc3NhZ2VIaWRkZW4sIG5leHRNZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIGlmIG1lc3NhZ2UgaXMgbm93IGhpZGRlblxyXG4gICAgaWYgKGlzTWVzc2FnZUhpZGRlbikge1xyXG4gICAgICAvLyB3ZSBjYW4gc3dhcCB0ZXh0IGFuZCBzaG93XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGN1cnJlbnRNZXNzYWdlOiBuZXh0TWVzc2FnZSxcclxuICAgICAgICBuZXh0TWVzc2FnZTogbnVsbCxcclxuICAgICAgICBpc01lc3NhZ2VIaWRkZW46IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHdlIGNhbiBzZXQgbmV4dCBtZXNzYWdlXHJcbiAgICAgIGxldCBtZXNzYWdlRGVsYXkgPSBkZWxheSB8fCAzMDAwO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkZWxheSkpIHtcclxuICAgICAgICBtZXNzYWdlRGVsYXkgPSBkZWxheS5sZW5ndGggPiB0aGlzLm1lc3NhZ2VJbmRleFxyXG4gICAgICAgICAgPyBkZWxheVt0aGlzLm1lc3NhZ2VJbmRleF1cclxuICAgICAgICAgIDogZGVsYXlbZGVsYXkubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCh0aGlzLnNldE5leHRNZXNzYWdlLCBtZXNzYWdlRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjdXJyZW50TWVzc2FnZSwgaXNNZXNzYWdlSGlkZGVuIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXJcclxuICAgICAgICBoaWRkZW49eyBpc01lc3NhZ2VIaWRkZW4gfVxyXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZD17IHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIgfT5cclxuICAgICAgICB7IGN1cnJlbnRNZXNzYWdlIH1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRGVtaWd1aXNlLnByb3BUeXBlcyA9IHtcclxuICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbiAgZGVsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxyXG4gIF0pLFxyXG4gIGxvb3A6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5EZW1pZ3Vpc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIG1lc3NhZ2VzOiBbXSxcclxuICBkZWxheTogMzAwMCxcclxuICBsb29wOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbWlndWlzZTtcclxuIl19
