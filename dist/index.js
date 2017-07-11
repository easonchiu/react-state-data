'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = function data(Comp) {
	return function (props) {
		Object.assign(Comp.prototype, {
			setData: function setData(res) {
				var _this = this;

				if (!this.state) {
					this.state = _extends({}, res);
				} else {
					Object.assign(this.state, res);
				}

				if (this.data) {
					console.warn('data must be null');
				}

				this.data = {};
				var th = this;

				Object.keys(res).forEach(function (res) {
					Object.defineProperty(_this.data, res, {
						set: function set(val) {
							if (th.state[res] !== val) {
								th.setState(_defineProperty({}, res, val));
							}
						},
						get: function get() {
							return th.state[res];
						}
					});
				});
			}
		});
		return _react2.default.createElement(Comp, props);
	};
};

exports.default = data;