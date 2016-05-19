'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemedSelect = function (_React$Component) {
    _inherits(ThemedSelect, _React$Component);

    function ThemedSelect() {
        _classCallCheck(this, ThemedSelect);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ThemedSelect).apply(this, arguments));
    }

    _createClass(ThemedSelect, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'select',
                {
                    defaultValue: this.props.defaultValue || 'placeholder',
                    value: this.props.value,
                    className: 'Bdrs(4px) ' + this.props.className,
                    onChange: this.props.onChange,
                    style: Object.assign({
                        backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/im-web-assets-dev/dropdowncaret.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px',
                        backgroundPosition: '100% 50%',
                        backgroundColor: 'transparent',
                        height: '32px',
                        paddingLeft: '10px',
                        paddingRight: '22px',
                        border: '1px solid #C3CCDA',
                        fontSize: '14px',
                        color: '#94A2B5'
                    }, this.props.style)
                },
                this.props.children
            );
        }
    }]);

    return ThemedSelect;
}(_react2.default.Component);

exports.default = ThemedSelect;
//# sourceMappingURL=ThemedSelect.js.map
