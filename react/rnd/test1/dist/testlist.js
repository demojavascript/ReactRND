"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_React$Component) {
	_inherits(View, _React$Component);

	function View(props) {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

		_this.prop = props;
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(View, [{
		key: "handleClick",
		value: function handleClick(event) {
			//console.log(this.prop.id);
			console.log(this);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ id: this.prop.id, onClick: this.handleClick },
				"View"
			);
		}
	}]);

	return View;
}(React.Component);

var List = function (_React$Component2) {
	_inherits(List, _React$Component2);

	function List(props) {
		_classCallCheck(this, List);

		var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

		_this2.prop = props;
		return _this2;
	}

	_createClass(List, [{
		key: "render",
		value: function render() {
			var countr = this.prop.countries;
			var listItems = countr.map(function (country) {
				return React.createElement(
					"li",
					null,
					React.createElement(
						"div",
						null,
						country.name,
						React.createElement(View, { id: country.name })
					)
				);
			});
			return React.createElement(
				"ul",
				null,
				listItems
			);
		}
	}]);

	return List;
}(React.Component);

var country = [{ name: "India", capital: "New Delhi" }, { name: "Bangladesh", capital: "Dhaka" }];
ReactDOM.render(React.createElement(List, { countries: country }), document.getElementById('root'));