"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = {
	"name": "Aman Singh",
	"games": ["Cricket", "Hockey", "Tennis"]
};

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Profile, { name: this.props.profileData.name }),
				React.createElement(Games, { games: this.props.profileData.games })
			);
		}
	}]);

	return App;
}(React.Component);

var Profile = function (_React$Component2) {
	_inherits(Profile, _React$Component2);

	function Profile() {
		_classCallCheck(this, Profile);

		return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	}

	_createClass(Profile, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					this.props.name
				)
			);
		}
	}]);

	return Profile;
}(React.Component);

var Games = function (_React$Component3) {
	_inherits(Games, _React$Component3);

	function Games(props) {
		_classCallCheck(this, Games);

		var _this3 = _possibleConstructorReturn(this, (Games.__proto__ || Object.getPrototypeOf(Games)).call(this, props));

		_this3.state = { data: [] };
		return _this3;
	}

	_createClass(Games, [{
		key: "render",
		value: function render() {
			if (this.state.data.length < 1) {
				return React.createElement(Loading, null);
			}
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					null,
					"Games"
				),
				React.createElement(
					"ul",
					null,
					this.state.data.map(function (obj, key) {
						return React.createElement(
							"li",
							null,
							obj.trackName
						);
					})
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.getData('https://itunes.apple.com/search?term=fun');
		}
	}, {
		key: "getData",
		value: function getData(urll) {
			$.ajax({
				url: urll,
				dataType: 'json',
				cache: false,
				success: function (data) {
					this.setState({ data: data.results }); // Notice this
					console.log(data);
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(status, err.toString());
				}.bind(this)
			});
		}
	}]);

	return Games;
}(React.Component);

var Loading = function (_React$Component4) {
	_inherits(Loading, _React$Component4);

	function Loading() {
		_classCallCheck(this, Loading);

		return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
	}

	_createClass(Loading, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"Loading"
			);
		}
	}]);

	return Loading;
}(React.Component);

ReactDOM.render(React.createElement(App, { profileData: Data }), document.getElementById('root'));