'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionMax = function OptionMax() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      min = _ref.min,
      label = _ref.label;

  return _react2.default.createElement(
    'option',
    { value: value, disabled: min >= value },
    label
  );
};

var OptionMin = function OptionMin() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref2.value,
      max = _ref2.max,
      label = _ref2.label;

  return _react2.default.createElement(
    'option',
    { value: value, disabled: max <= value },
    label
  );
};

var MaxMin = function (_React$Component) {
  _inherits(MaxMin, _React$Component);

  function MaxMin(props) {
    _classCallCheck(this, MaxMin);

    var _this = _possibleConstructorReturn(this, (MaxMin.__proto__ || Object.getPrototypeOf(MaxMin)).call(this));

    _this.state = {
      min: props.min || props.placeholderValue,
      max: props.max || props.placeholderValue
    };
    return _this;
  }

  _createClass(MaxMin, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.min !== this.state.min) {
        this.setState({ min: nextProps.min || nextProps.placeholderValue });
      }
      if (nextProps.max !== this.state.max) {
        this.setState({ max: nextProps.max || nextProps.placeholderValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          SelectBox = _props.selectBox,
          options = _props.options,
          minCallback = _props.minCallback,
          maxCallback = _props.maxCallback,
          separator = _props.separator,
          placeholderMin = _props.placeholderMin,
          placeholderMax = _props.placeholderMax,
          placeholderValue = _props.placeholderValue,
          minProps = _props.minProps,
          maxProps = _props.maxProps;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          SelectBox,
          _extends({}, minProps, {
            value: this.state.min,
            onChange: function onChange(ev) {
              _this2.setState({ min: ev.target.value });
              minCallback(ev.target.value);
            }
          }),
          _react2.default.createElement(
            'option',
            { disabled: true, value: placeholderValue },
            placeholderMin
          ),
          options.map(function (item) {
            return _react2.default.createElement(OptionMin, { key: 'min-' + item.label + '-' + item.value, max: _this2.state.max, value: item.value, label: item.label });
          })
        ),
        separator,
        _react2.default.createElement(
          SelectBox,
          _extends({}, maxProps, {
            value: this.state.max,
            onChange: function onChange(ev) {
              _this2.setState({ max: ev.target.value });
              maxCallback(ev.target.value);
            }
          }),
          _react2.default.createElement(
            'option',
            { disabled: true, value: placeholderValue },
            placeholderMax
          ),
          options.map(function (item) {
            return _react2.default.createElement(OptionMax, { key: 'max-' + item.label + '-' + item.value, min: _this2.state.min, value: item.value, label: item.label });
          })
        )
      );
    }
  }]);

  return MaxMin;
}(_react2.default.Component);

MaxMin.propTypes = {
  max: _propTypes2.default.number.isRequired,
  maxCallback: _propTypes2.default.func,
  maxProps: _propTypes2.default.object.isRequired,
  min: _propTypes2.default.number.isRequired,
  minCallback: _propTypes2.default.func,
  minProps: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.array,
  placeholderMax: _propTypes2.default.node,
  placeholderMin: _propTypes2.default.node,
  placeholderValue: _propTypes2.default.string,
  selectBox: _propTypes2.default.func.isRequired,
  separator: _propTypes2.default.node
};

MaxMin.defaultProps = {
  options: [],
  placeholderValue: 'placeholder',
  placeholderMin: null,
  placeholderMax: null,
  separator: null,
  maxCallback: function maxCallback() {},
  minCallback: function minCallback() {}
};

exports.default = MaxMin;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map