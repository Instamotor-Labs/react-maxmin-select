'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemedSelect = require('./ThemedSelect');

var _ThemedSelect2 = _interopRequireDefault(_ThemedSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionMax = function (_React$Component) {
    _inherits(OptionMax, _React$Component);

    function OptionMax() {
        _classCallCheck(this, OptionMax);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OptionMax).apply(this, arguments));
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

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OptionMin).apply(this, arguments));
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

    function MaxMin() {
        _classCallCheck(this, MaxMin);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(MaxMin).call(this));

        _this3.state = {};
        return _this3;
    }

    _createClass(MaxMin, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            var options = this.props.options || [];
            var minCallback = this.props.minCallback;
            var maxCallback = this.props.maxCallback;
            var placeHolderMin = this.props.placeHolderMin;
            var placeHolderMax = this.props.placeHolderMax;
            var width = this.props.width;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _ThemedSelect2.default,
                    {
                        value: this.props.min || 'placeholder',
                        style: { width: this.props.width },
                        className: 'W(1/2) IbBox Mt(16px)',
                        onChange: function onChange(ev) {
                            _this4.setState({ min: ev.target.value });
                            minCallback(ev.target.value);
                        }
                    },
                    _react2.default.createElement(
                        'option',
                        { disabled: true, value: 'placeholder' },
                        placeHolderMin
                    ),
                    options.map(function (item) {
                        return _react2.default.createElement(OptionMin, { max: _this4.state.max, year: item.value, yearLabel: item.label });
                    })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'Mt(16px) D(ib) Mt(25px) Fz(14px) C(#94A2B5) Mstart(5px) Mend(5px)' },
                    'to'
                ),
                _react2.default.createElement(
                    _ThemedSelect2.default,
                    {
                        value: this.props.max || 'placeholder',
                        style: { width: this.props.width },
                        className: 'IbBox Mt(16px)',
                        onChange: function onChange(ev) {
                            _this4.setState({ max: ev.target.value });
                            maxCallback(ev.target.value);
                        }
                    },
                    _react2.default.createElement(
                        'option',
                        { disabled: true, value: 'placeholder' },
                        placeHolderMax
                    ),
                    options.map(function (item) {
                        return _react2.default.createElement(OptionMax, { min: _this4.state.min, year: item.value, yearLabel: item.label });
                    })
                )
            );
        }
    }]);

    return MaxMin;
}(_react2.default.Component);

exports.default = MaxMin;
//# sourceMappingURL=MaxMin.js.map
