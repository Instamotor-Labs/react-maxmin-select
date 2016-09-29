'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionMax = function (_React$Component) {
    _inherits(OptionMax, _React$Component);

    function OptionMax() {
        _classCallCheck(this, OptionMax);

        return _possibleConstructorReturn(this, (OptionMax.__proto__ || Object.getPrototypeOf(OptionMax)).apply(this, arguments));
    }

    _createClass(OptionMax, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'option',
                { value: this.props.year, disabled: this.props.min > this.props.year ? true : false },
                this.props.yearLabel
            );
        }
    }]);

    return OptionMax;
}(_react2.default.Component);

var OptionMin = function (_React$Component2) {
    _inherits(OptionMin, _React$Component2);

    function OptionMin() {
        _classCallCheck(this, OptionMin);

        return _possibleConstructorReturn(this, (OptionMin.__proto__ || Object.getPrototypeOf(OptionMin)).apply(this, arguments));
    }

    _createClass(OptionMin, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'option',
                { value: this.props.year, disabled: this.props.max < this.props.year ? true : false },
                this.props.yearLabel
            );
        }
    }]);

    return OptionMin;
}(_react2.default.Component);

var MaxMin = function (_React$Component3) {
    _inherits(MaxMin, _React$Component3);

    function MaxMin(props) {
        _classCallCheck(this, MaxMin);

        var _this3 = _possibleConstructorReturn(this, (MaxMin.__proto__ || Object.getPrototypeOf(MaxMin)).call(this));

        _this3.state = {
            min: props.min || props.placeholderValue,
            max: props.max || props.placeholderValue
        };
        return _this3;
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
            var _this4 = this;

            var SelectBox = this.props.selectBox;
            var options = this.props.options;
            var minCallback = this.props.minCallback;
            var maxCallback = this.props.maxCallback;
            var placeHolderMin = this.props.placeHolderMin;
            var placeHolderMax = this.props.placeHolderMax;
            var placeholderValue = this.props.placeholderValue;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    SelectBox,
                    _extends({}, this.props.minProps, {
                        value: this.state.min,
                        onChange: function onChange(ev) {
                            _this4.setState({ min: ev.target.value });
                            minCallback(ev.target.value);
                        }
                    }),
                    _react2.default.createElement(
                        'option',
                        { disabled: true, value: placeholderValue },
                        placeHolderMin
                    ),
                    options.map(function (item, idx) {
                        return _react2.default.createElement(OptionMin, { key: 'min-' + idx, max: _this4.state.max, year: item.value, yearLabel: item.label });
                    })
                ),
                this.props.separator,
                _react2.default.createElement(
                    SelectBox,
                    _extends({}, this.props.maxProps, {
                        value: this.state.max,
                        onChange: function onChange(ev) {
                            _this4.setState({ max: ev.target.value });
                            maxCallback(ev.target.value);
                        }
                    }),
                    _react2.default.createElement(
                        'option',
                        { disabled: true, value: placeholderValue },
                        placeHolderMax
                    ),
                    options.map(function (item, idx) {
                        return _react2.default.createElement(OptionMax, { key: 'max-' + idx, min: _this4.state.min, year: item.value, yearLabel: item.label });
                    })
                )
            );
        }
    }]);

    return MaxMin;
}(_react2.default.Component);

MaxMin.propTypes = {
    selectBox: _react.PropTypes.func,
    options: _react.PropTypes.array,
    minCallBack: _react.PropTypes.func,
    maxCallBack: _react.PropTypes.func,
    placeHolderMin: _react.PropTypes.node,
    placeHolderMax: _react.PropTypes.node,
    placeHolderValue: _react.PropTypes.string
};

MaxMin.defaultProps = {
    options: [],
    placeholderValue: 'placeholder'
};

exports.default = MaxMin;
//# sourceMappingURL=MaxMin.js.map
