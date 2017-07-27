/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(45);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(42);

var _config2 = _interopRequireDefault(_config);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Api = {
  getUsers: function getUsers(cb) {
    _axios2.default.get(_config2.default.getUsersUrl()).then(function (result) {
      cb(result.data);
    });
  },
  getLogin: function getLogin(email, password, cb) {
    _axios2.default.post(_config2.default.getLoginUrl(), { "email": email, "password": password }).then(function (result) {
      cb(result.data);
    });
  },
  getRegister: function getRegister(email, password, name, cb) {
    _axios2.default.post(_config2.default.getRegisterUrl(), { "name": name, "email": email, "password": password }).then(function (result) {
      cb(result.data);
    });
  },
  getCategories: function getCategories(cb) {
    _axios2.default.get(_config2.default.getAllCatUrl(), {}).then(function (result) {
      cb(result.data);
    });
  },
  addCategories: function addCategories(title, desc, cb) {
    _axios2.default.post(_config2.default.getCatCreateUrl(), { "title": title, "desc": desc }).then(function (result) {
      cb(result.data);
    });
  },
  editCategories: function editCategories(_id, title, desc, cb) {
    _axios2.default.put(_config2.default.getUpdateCatUrl(_id), { "title": title, "desc": desc }).then(function (result) {
      cb(result.data);
    });
  },
  getPosts: function getPosts(cb) {
    _axios2.default.get(_config2.default.getAllPostsUrl(), {}).then(function (result) {
      cb(result.data);
    });
  },
  addPost: function addPost(title, desc, catid, catname, _id, name, email, cb) {
    _axios2.default.post(_config2.default.getPostCreateUrl(), { "title": title, "desc": desc, "catname": catname, "catid": catid, "id": _id, "name": name, "email": email }).then(function (result) {
      cb(result.data);
    });
  },
  editPost: function editPost(_id, title, desc, catid, catname, id, name, email, cb) {
    _axios2.default.put(_config2.default.getUpdatePostUrl(_id), { "title": title, "desc": desc, "catname": catname, "catid": catid, "id": id, "name": name, "email": email }).then(function (result) {
      cb(result.data);
    });
  },
  getPost: function getPost(slug, cb) {
    _axios2.default.get(_config2.default.getPostBySlugrl(slug), {}).then(function (result) {
      cb(result.data);
    });
  },
  getPostByUser: function getPostByUser(cb) {
    _axios2.default.get(_config2.default.getPostByUserUrl(_Auth2.default.getUser()), {}).then(function (result) {
      cb(result.data);
    });
  }
};
exports.default = Api;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Auth = {
	isloggedin: function isloggedin() {
		var login = false;
		if (window.localStorage.getItem('banadb') == undefined || window.localStorage.getItem('banadb') == '0') {
			login = false;
		} else {
			login = true;
		}
		return login;
	},
	login: function login(user) {
		localStorage.setItem('banadb', JSON.stringify(user));
	},
	logout: function logout(cb) {
		localStorage.setItem('banadb', '0');
		cb();
	},
	getUser: function getUser() {
		return JSON.parse(localStorage.getItem('banadb'));
	}
};
exports.default = Auth;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

		_this.state = { islogin: false };
		return _this;
	}

	_createClass(Nav, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			if (_Auth2.default.isloggedin()) {
				self.setState({ islogin: true });
			}
		}
	}, {
		key: 'onLogout',
		value: function onLogout() {
			_Auth2.default.logout(function () {
				window.location.reload();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _content = _react2.default.createElement(
				'ul',
				{ className: 'pull-right' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ to: '/login' },
						'Login'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ to: '/register' },
						'Regsiter'
					)
				)
			);
			if (this.state.islogin) {
				_content = _react2.default.createElement(
					'ul',
					{ className: 'pull-right' },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouterDom.NavLink,
							{ to: '/admin' },
							'Dashboard'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'button',
							{ onClick: this.onLogout.bind(this) },
							'Logout'
						)
					)
				);
			}
			return _react2.default.createElement(
				'section',
				null,
				_react2.default.createElement(
					'nav',
					null,
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ exact: true, activeClassName: 'active', to: '/' },
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ activeClassName: 'active', to: '/about' },
								'About'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ activeClassName: 'active', to: '/contact' },
								'Contact'
							)
						)
					),
					_content
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passwordValidation = function passwordValidation(pwd) {
	var pattern = /^([a-zA-Z0-9_-]){8,12}$/;
	return pwd.match(pattern);
};

module.exports = passwordValidation;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(4);
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    desc: String,
    slug: String,
    catid: String,
    catname: String,
    user: {
        _id: String,
        email: String,
        name: String
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
postSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});
module.exports = mongoose.model('Post', postSchema);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Slug = function Slug(str) {
  str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
  str = str.replace(/^\s+|\s+$/gm, '');
  str = str.replace(/\s+/g, '-');
  return str;
};

module.exports = Slug;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(46);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (renderMe) {
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Demo</title>\n        <style>\n            body {\n                font-family: Helvetica Neue, Arial, sans-serif;\n                margin: 0;\n            }\n            html { box-sizing: border-box; }\n            *, *:before, *:after { box-sizing: inherit; }\n        </style>\n        <link rel="stylesheet" href="/static/styles.css">\n    </head>\n    <body>\n        <div id="app">' + (0, _server.renderToString)(renderMe) + '</div>\n        <script src="/static/client.js"></script>\n    </body>\n</html>';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (router) {
  __webpack_require__(21)(router);
  __webpack_require__(19)(router);
  __webpack_require__(20)(router);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(37);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(26);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(36);

var _Contact2 = _interopRequireDefault(_Contact);

var _Login = __webpack_require__(38);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(39);

var _Register2 = _interopRequireDefault(_Register);

var _Admin = __webpack_require__(27);

var _Admin2 = _interopRequireDefault(_Admin);

var _PostDetail = __webpack_require__(41);

var _PostDetail2 = _interopRequireDefault(_PostDetail);

var _Notfound = __webpack_require__(43);

var _Notfound2 = _interopRequireDefault(_Notfound);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/admin', component: _Admin2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/post/:post', component: _PostDetail2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _Notfound2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Slug = __webpack_require__(8);

var _Slug2 = _interopRequireDefault(_Slug);

var _emailValidator = __webpack_require__(9);

var _emailValidator2 = _interopRequireDefault(_emailValidator);

var _Util = __webpack_require__(6);

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = __webpack_require__(10).ObjectID;
var Category = __webpack_require__(24);
var Post = __webpack_require__(7);

module.exports = function (router) {

  router.route('/category').get(function (req, res) {
    var status = 0;
    var msg = "";
    var data;
    Category.find({}, function (err, categories) {
      if (err) {
        res.json({ "status": status, "msg": err });
      } else if (categories.length === 0) {
        msg = "No Category Found";
        res.json({ "status": 1, "msg": msg });
      } else {
        res.json({ "status": 1, "msg": msg, "data": categories });
      }
    });
  }).post(function (req, res) {
    var status = 0;
    var msg = "";
    var data;

    if (req.body.title === undefined) {
      msg = "Please provide category Name.";
      res.json({ "status": status, "msg": msg });
    } else if (req.body.title.trim().length < 3 || req.body.title.trim().length > 100) {
      msg = "Category name must me between 3 to 100 char long";
      res.json({ "status": status, "msg": msg });
    } else if (req.body.desc === undefined) {
      msg = "Please provide category Desc.";
      res.json({ "status": status, "msg": msg });
    } else {
      Category.find({ "slug": (0, _Slug2.default)(req.body.title) }, function (err, cats) {
        if (err) {
          res.json({ "status": status, "msg": err });
        } else if (cats.length > 0) {
          msg = "Category Name already exist.";
          res.json({ "status": status, "msg": msg });
        } else {
          var category = new Category();
          category.title = req.body.title;
          category.desc = req.body.desc;
          category.slug = (0, _Slug2.default)(req.body.title);
          category.save(function (errin) {
            if (errin) {
              res.json({ "status": status, "msg": err });
            } else {
              msg = "Category Created.";
              res.json({ "status": 1, "msg": msg });
            }
          });
        }
      });
    }
  });

  router.route('/category/:catid').get(function (req, res) {
    var status = 0;
    var msg = "";
    var data;
    Category.find({ "_id": req.params.catid.trim() }, function (err, categories) {
      if (err) {
        res.json({ "status": status, "msg": err });
      } else if (categories.length === 0) {
        msg = "No Category Found";
        res.json({ "status": status, "msg": msg });
      } else {
        res.json({ "status": status, "msg": msg, "data": categories[0] });
      }
    });
  }).put(function (req, res) {
    var status = 0;
    var msg = "";
    var data;
    if (req.params.catid === undefined || req.params.catid.trim().length < 1) {
      msg = "Please provide category Id.";
      res.json({ "status": status, "msg": msg });
    } else {
      Category.find({ "_id": ObjectId(req.params.catid) }, function (err, cats) {
        if (err) {
          res.json({ "status": status, "msg": err });
        } else if (cats.length === 0) {
          msg = "Category doesn't exist.";
          res.json({ "status": status, "msg": msg });
        } else {
          Category.find({ "slug": (0, _Slug2.default)(req.body.title) }, function (err, catdata) {
            if (err) {
              res.json({ "status": status, "msg": err });
            } else if (catdata.length > 0 && catdata[0]._id != req.params.catid) {
              msg = "Category name already exist.";
              res.json({ "status": status, "msg": msg });
            } else {
              if (req.body.title === undefined) {
                msg = "Please provide category Name.";
                res.json({ "status": status, "msg": msg });
              } else if (req.body.title.trim().length < 3 || req.body.title.trim().length > 100) {
                msg = "Category name must me between 3 to 100 char long";
                res.json({ "status": status, "msg": msg });
              } else if (req.body.desc === undefined) {
                msg = "Please provide category Desc.";
                res.json({ "status": status, "msg": msg });
              } else {
                var category = cats[0];
                category.title = req.body.title;
                category.desc = req.body.desc;
                category.slug = (0, _Slug2.default)(req.body.title);
                category.save(function (errin) {
                  if (errin) {
                    res.json({ "status": status, "msg": errin });
                  } else {
                    msg = "Category Updated.";

                    Post.find({ "catid": ObjectId(category._id) }, function (err, posts) {
                      posts.forEach(function (obj) {
                        //Post.update({"catid": ObjectId(obj.catid)}, {$set: {"catname": category.title}});
                        obj.catname = category.title;
                        obj.save(function (err2) {});
                      });
                    });
                    res.json({ "status": 1, "msg": msg });
                  }
                });
              }
            }
          });
        }
      });
    }
  }).delete(function (req, res) {
    var status = 0;
    var msg = "";
    var data;
    Category.find({ "_id": req.params.catid }, function (err, cats) {
      if (err) {
        res.json({ "status": status, "msg": err });
      } else if (cats.length === 0) {
        msg = "Category doesn't exist.";
        res.json({ "status": status, "msg": msg });
      } else {
        Category.remove({ _id: req.params.catid }, function (errin, created_at) {
          if (errin) {
            res.json({ "status": status, "msg": errin });
          } else {
            msg = "Category removed.";
            res.json({ "status": 1, "msg": msg });
          }
        });
      }
    });
  });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Slug = __webpack_require__(8);

var _Slug2 = _interopRequireDefault(_Slug);

var _Util = __webpack_require__(6);

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = __webpack_require__(7);
var ObjectId = __webpack_require__(10).ObjectID;

module.exports = function (router) {

    router.route('/post/:id').get(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        Post.find({ "_id": ObjectId(req.params.id) }, function (err, posts) {
            if (err) {
                res.json({ "status": status, "msg": err });
            } else if (posts.length === 0) {
                msg = "No Post Found";
                res.json({ "status": 1, "msg": msg });
            } else {
                res.json({ "status": 1, "data": posts[0] });
            }
        });
    }).put(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        if (req.params.id === undefined) {
            msg = "Post id can not be blank";
            res.json({ "status": 1, "msg": msg });
        } else {
            Post.find({ "_id": ObjectId(req.params.id) }, function (err, posts) {
                if (err) {
                    res.json({ "status": 1, "msg": err });
                } else if (posts.length === 0) {
                    msg = "Post doesn't exist.";
                    res.json({ "status": 1, "msg": msg });
                } else {
                    Post.find({ "slug": (0, _Slug2.default)(req.body.title) }, function (errin1, postdata) {
                        if (errin1) {
                            res.json({ "status": status, "msg": errin1 });
                        } else if (postdata.length > 0 && postdata[0]._id != req.params.id) {
                            msg = "Post already exist.";
                            res.json({ "status": status, "msg": msg });
                        } else {
                            if (req.body.title === undefined) {
                                msg = "Please provide Post Name.";
                                res.json({ "status": status, "msg": msg });
                            } else if (req.body.title.trim().length < 10) {
                                msg = "Post title must be atleast 10 char long";
                                res.json({ "status": status, "msg": msg });
                            } else if (req.body.desc === undefined) {
                                msg = "Please provide Post Desc.";
                                res.json({ "status": status, "msg": msg });
                            } else if (req.body.catid === undefined || req.body.catname === undefined) {
                                msg = "Please provide Post Category.";
                                res.json({ "status": status, "msg": msg });
                            } else if (req.body.id === undefined || req.body.id.length < 1) {
                                msg = "Please provide Post Admin Id.";
                                res.json({ "status": status, "msg": msg });
                            } else if (req.body.name === undefined || req.body.name.length < 1) {
                                msg = "Please provide Post Admin Name.";
                                res.json({ "status": status, "msg": msg });
                            } else if (req.body.email === undefined || req.body.email.length < 1) {
                                msg = "Please provide Post Admin Email.";
                                res.json({ "status": status, "msg": msg });
                            } else {
                                var post = posts[0];
                                post.title = req.body.title;
                                post.desc = req.body.desc;
                                post.slug = (0, _Slug2.default)(req.body.title);
                                post.catid = req.body.catid;
                                post.catname = req.body.catname;
                                post.user = { _id: req.body.id, name: req.body.name, email: req.body.email };
                                post.save(function (errin) {
                                    if (errin) {
                                        res.json({ "status": status, "msg": errin });
                                    } else {
                                        msg = "Post Updated.";
                                        res.json({ "status": 1, "msg": msg });
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    }).delete(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        Post.find({ "_id": req.params.id }, function (err, posts) {
            if (err) {
                res.json({ "status": status, "msg": err });
            } else if (posts.length === 0) {
                msg = "Post doesn't exist.";
                res.json({ "status": status, "msg": msg });
            } else {
                Post.remove({ _id: ObjectId(req.params.id) }, function (errin, created_at) {
                    if (errin) {
                        res.json({ "status": status, "msg": errin });
                    } else {
                        msg = "Post removed.";
                        res.json({ "status": 1, "msg": msg });
                    }
                });
            }
        });
    });

    router.route('/post').get(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        Post.find({}, function (err, posts) {
            if (err) {
                res.json({ "status": status, "msg": err });
            } else if (posts.length === 0) {
                msg = "No Post Found";
                res.json({ "status": 1, "msg": msg });
            } else {
                res.json({ "status": 1, "data": posts });
            }
        });
    }).post(function (req, res) {
        var status = 0;
        var msg = "";
        var data;

        if (req.body.title === undefined) {
            msg = "Please provide Post Name.";
            res.json({ "status": status, "msg": msg });
        } else if (req.body.title.trim().length < 10) {
            msg = "Post title must be atleast 10 char long";
            res.json({ "status": status, "msg": msg });
        } else if (req.body.desc === undefined) {
            msg = "Please provide Post Desc.";
            res.json({ "status": status, "msg": msg });
        } else if (req.body.catid === undefined || req.body.catid.length == 0 || req.body.catid == "-1" || req.body.catname === undefined) {
            msg = "Please provide Post Category.";
            res.json({ "status": status, "msg": msg });
        } else if (req.body.id === undefined || req.body.id.length < 1) {
            msg = "Please provide Post Admin Id.";
            res.json({ "status": status, "msg": msg });
        } else if (req.body.name === undefined || req.body.name.length < 1) {
            msg = "Please provide Post Admin Name.";
            res.json({ "status": status, "msg": msg });
        } else if (req.body.email === undefined || req.body.email.length < 1) {
            msg = "Please provide Post Admin Email.";
            res.json({ "status": status, "msg": msg });
        } else {
            Post.find({ "slug": (0, _Slug2.default)(req.body.title) }, function (err, posts) {
                if (err) {
                    res.json({ "status": status, "msg": err });
                } else if (posts.length > 0) {
                    msg = "Post with same title already exist";
                    res.json({ "status": status, "msg": msg });
                } else {
                    var post = new Post();
                    post.title = req.body.title;
                    post.desc = req.body.desc;
                    post.slug = (0, _Slug2.default)(req.body.title);
                    post.catid = req.body.catid;
                    post.catname = req.body.catname;
                    post.user = { _id: req.body.id, name: req.body.name, email: req.body.email };
                    post.save(function (errin) {
                        if (errin) {
                            res.json({ "status": status, "msg": errin });
                        } else {
                            msg = "Post created.";
                            res.json({ "status": 1, "msg": msg });
                        }
                    });
                }
            });
        }
    });
    router.route('/postbycat/:catid').get(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        Post.find({ "catid": ObjectId(req.params.catid) }, function (err, posts) {
            if (err) {
                res.json({ "status": status, "msg": err });
            } else if (posts.length === 0) {
                msg = "No Post Found";
                res.json({ "status": 1, "msg": posts });
            } else {
                res.json({ "status": 1, "data": posts });
            }
        });
    });

    router.route('/postbyslug/:slug').get(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        Post.find({ "slug": req.params.slug }, function (err, posts) {
            if (err) {
                res.json({ "status": status, "msg": err });
            } else if (posts.length === 0) {
                msg = "No Post Found";
                res.json({ "status": 1, "msg": msg });
            } else {
                res.json({ "status": 1, "data": posts[0] });
            }
        });
    });

    router.route('/postbyuser/:id').get(function (req, res) {
        var status = 0;
        var msg = "";
        var data;
        Post.find({ "user._id": req.params.id }, function (err, posts) {
            if (err) {
                res.json({ "status": status, "msg": err });
            } else if (posts.length === 0) {
                msg = "No Post Found";
                res.json({ "status": 1, "msg": msg });
            } else {
                res.json({ "status": 1, "data": posts });
            }
        });
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emailValidator = __webpack_require__(9);

var _emailValidator2 = _interopRequireDefault(_emailValidator);

var _Util = __webpack_require__(6);

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = __webpack_require__(25);
var Post = __webpack_require__(7);

module.exports = function (router) {
  router.route('/login').post(function (req, res) {
    var status = 0;
    var msg = "";
    var data;
    if (req.body.email === undefined) {
      msg = "Please provide user email.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (!_emailValidator2.default.validate(req.body.email)) {
      msg = "Please provide correct email.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (req.body.password === undefined) {
      msg = "Please provide user password.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if ((0, _Util2.default)(req.body.password) === null) {
      msg = "Please provide password between 8 to 12 alphanumeric.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else {
      User.find({ "email": req.body.email, "password": req.body.password }, function (err, users) {
        if (err) {
          msg = err;
          res.json({ "status": status, "msg": msg, "data": data });
        } else {
          if (users.length < 1) {
            status = 0;
            msg = "User not registered.";
          } else {
            status = 1;
            data = users[0];
          }
          res.json({ "status": status, "msg": msg, "data": data });
        }
      });
    }
  });

  router.route('/user').get(function (req, res) {
    User.find({}, function (err, users) {
      if (err) {
        res.json({ "status": 0, "msg": err });
      } else if (users === null || users.length == 0) {
        res.json({ "status": 0, "msg": "user does not exist." });
      } else {
        res.json({ "status": 1, "data": users });
      }
    });
  }).post(function (req, res) {
    var status = 0;
    var msg = "";
    var data;
    if (req.body.email === undefined) {
      msg = "Please provide user email.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (!_emailValidator2.default.validate(req.body.email)) {
      msg = "Please provide correct email.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (req.body.password === undefined) {
      msg = "Please provide user password.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if ((0, _Util2.default)(req.body.password) === null) {
      msg = "Please provide password between 8 to 12 alphanumeric.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (req.body.name === undefined) {
      msg = "Please provide user name.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (req.body.name.length < 5) {
      msg = "Name can not be less than 5 char.";
      res.json({ "status": status, "msg": msg, "data": data });
    } else if (req.body.role === undefined || req.body.role.length < 1) {
      msg = "Please provide user role";
      res.json({ "status": status, "msg": msg, "data": data });
    } else {
      User.find({ "email": req.body.email, "password": req.body.password }, function (err, users) {
        if (err) {
          msg = err;
          res.json({ "status": status, "msg": msg, "data": data });
        } else {
          if (users.length > 0) {
            status = 0;
            msg = "Email already exist.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else {
            var user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.role = req.body.role;
            user.save(function (err) {
              if (err) {
                msg = err;
                status = 0;
                res.json({ "status": status, "msg": msg, "data": data });
                return;
              } else {
                status = 1;
                msg = "user registered.";
                res.json({ "status": status, "msg": msg, "data": data });
                return;
              }
            });
          }
        }
      });
    }
  });

  router.route('/user/:id').get(function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        res.json({ "status": 0, "msg": err });
      } else if (user === null) {
        res.json({ "status": 0, "msg": "user does not exist." });
      } else {
        res.json({ "status": 1, "data": user });
      }
    });
  }).put(function (req, res) {
    User.findById(req.params.id, function (err_, user) {
      var status = 0;
      var msg = "";
      var data;
      if (err_) {
        res.json({ "status": 0, "msg": err_ });
      } else {
        if (user === null) {
          res.json({ "status": 0, "msg": "user does not exist." });
        } else {
          if (req.body.email === undefined) {
            msg = "Please provide user email.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else if (!_emailValidator2.default.validate(req.body.email)) {
            msg = "Please provide correct email.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else if (req.body.password === undefined) {
            msg = "Please provide user password.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else if ((0, _Util2.default)(req.body.password) === null) {
            msg = "Please provide password between 8 to 12 alphanumeric.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else if (req.body.name === undefined) {
            msg = "Please provide user name.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else if (req.body.name.length < 5) {
            msg = "Name can not be less than 5 char.";
            res.json({ "status": status, "msg": msg, "data": data });
          } else if (req.body.role === undefined || req.body.role.length < 1) {
            msg = "Please provide user role";
            res.json({ "status": status, "msg": msg, "data": data });
          } else {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.role = req.body.role;
            user.save(function (err) {
              if (err) {
                res.json({ "status": 0, "msg": err });
              } else {
                Post.find({ "user._id": req.params.id }, function (err, posts) {
                  posts.forEach(function (obj) {
                    //Post.update({"catid": ObjectId(obj.catid)}, {$set: {"catname": category.title}});
                    obj.user.name = req.body.name;
                    obj.save(function (err2) {});
                  });
                });
                res.json({ "status": 1, "msg": 'User updated!' });
              }
            });
          }
        }
      }
    });
  }).delete(function (req, res) {
    User.findById(req.params.id, function (err_, user) {
      if (err_) {
        res.json({ "status": 0, "msg": err_ });
      } else {
        if (user === null) {
          res.json({ "status": 0, "msg": "user does not exist." });
        } else {
          User.remove({ _id: req.params.userid }, function (err, nuser) {
            if (err) {
              res.json({ "status": 0, "msg": err });
            } else {
              res.json({ "status": 1, "msg": "user deleted." });
            }
          });
        }
      }
    });
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MONTHSNAME = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var DAYSNAME = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var DateFormat = function DateFormat(timestamp) {
  var objDate = new Date(timestamp);
  var monthName = MONTHSNAME[objDate.getMonth()];
  var dayName = DAYSNAME[objDate.getDate()];
  var month = objDate.getMonth();
  var day = objDate.getDate();
  var year = objDate.getFullYear();
  var HH = objDate.getHours();
  var MM = objDate.getMinutes();
  var SS = objDate.getSeconds();
  return day + " " + monthName + " " + year;
};

module.exports = DateFormat;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

var _sourceMapSupport = __webpack_require__(18);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _render = __webpack_require__(11);

var _render2 = _interopRequireDefault(_render);

var _nodeFetch = __webpack_require__(17);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { StaticRouter as Router, matchPath } from 'react-router';
var bodyParser = __webpack_require__(14);
var mongoose = __webpack_require__(4);
var cors = __webpack_require__(15);

var routes = ['/'];

_sourceMapSupport2.default.install();

var app = (0, _express2.default)();
app.use('/static', _express2.default.static('./dist'));
app.route("/");

app.get('*', function (req, res, next) {
  console.log(req.path);
  if (req.path.indexOf("/api/") != -1) {
    next();
  } else {
    var match = routes.reduce(function (acc, route) {
      return (0, _reactRouterDom.matchPath)(req.url, route, { exact: true }) || acc;
    }, null);
    if (!match) {
      res.status(404).send((0, _render2.default)(_react2.default.createElement(NoMatch, null)));
      return;
    } else {
      res.status(200).send((0, _render2.default)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { context: {}, location: req.url },
        _react2.default.createElement(_App2.default, null)
      )));
    }
  }
});

mongoose.connect('mongodb://localhost/banadb');

var corsOptions = {
  origin: 'http://localhost:3001'
};
var issuesoption = {
  origin: true,
  methods: ['PUT'],
  credentials: true
};
//app.use(cors(corsOptions))
app.options('*', cors(issuesoption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = _express2.default.Router();

__webpack_require__(12)(router);
app.use('/api', router);

app.listen(3000, function () {
  return console.log('Demo app df sdflistening on port 3000');
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(4);
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  title: String,
  desc: String,
  slug: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
categorySchema.pre('save', function (next) {
  //now = new Date();
  this.updated_at = new Date();
  next();
});
module.exports = mongoose.model('Category', categorySchema);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(4);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    name: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', UserSchema);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Nav = __webpack_require__(5);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
	_inherits(About, _React$Component);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	}

	_createClass(About, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Nav2.default, null),
				_react2.default.createElement(
					'h1',
					null,
					'About'
				)
			);
		}
	}]);

	return About;
}(_react2.default.Component);

exports.default = About;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Nav = __webpack_require__(31);

var _Nav2 = _interopRequireDefault(_Nav);

var _User = __webpack_require__(35);

var _User2 = _interopRequireDefault(_User);

var _Category = __webpack_require__(29);

var _Category2 = _interopRequireDefault(_Category);

var _Post = __webpack_require__(34);

var _Post2 = _interopRequireDefault(_Post);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admin = function (_React$Component) {
	_inherits(Admin, _React$Component);

	function Admin(props) {
		_classCallCheck(this, Admin);

		var _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

		_this.state = { "user": null };
		return _this;
	}

	_createClass(Admin, [{
		key: 'onLogout',
		value: function onLogout() {
			var self = this;
			_Auth2.default.logout(function () {
				self.props.history.push("/");
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!_Auth2.default.isloggedin()) {
				this.props.history.push('/logina');
			} else {
				this.setState({ user: _Auth2.default.getUser() });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Nav2.default, { onlogout: this.onLogout.bind(this) }),
				_react2.default.createElement(
					'section',
					{ className: 'content' },
					this.props.children,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/category', component: _Category2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/post', component: _Post2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/users', component: _User2.default })
					)
				)
			);
		}
	}]);

	return Admin;
}(_react2.default.Component);

exports.default = Admin;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_React$Component) {
	_inherits(Category, _React$Component);

	function Category(props) {
		_classCallCheck(this, Category);

		var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

		_this.state = { "title": "", "desc": "", "error": _this.props.catformerror, showform: _this.props.showform };
		return _this;
	}

	_createClass(Category, [{
		key: 'onHideNewCatForm',
		value: function onHideNewCatForm() {
			this.props.onHideNewCatForm();
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var change = {};
			change[e.target.name] = e.target.value;
			this.setState(change);
		}
	}, {
		key: 'onSubmitCatForm',
		value: function onSubmitCatForm() {
			var self = this;
			_api2.default.addCategories(self.state.title, self.state.desc, function (data) {
				if (data.status == 0) {
					self.setState({ error: data.msg });
				} else {
					self.props.refreshData();
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			var error;
			if (this.state.error.length > 0) {
				error = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'error' },
						this.state.error
					)
				);
			}

			var _newcatform = _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement('input', {
						name: 'title',
						value: this.state.title,
						onChange: this.handleChange.bind(this),
						type: 'text',
						placeholder: 'Category Title'
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement('input', {
						name: 'desc',
						value: this.state.desc,
						onChange: this.handleChange.bind(this),
						type: 'text',
						placeholder: 'Category Desc'
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'button',
						{ onClick: this.onSubmitCatForm.bind(this) },
						'Create Category'
					),
					_react2.default.createElement(
						'button',
						{ className: 'pull-right', onClick: this.onHideNewCatForm.bind(this) },
						'Cancel'
					)
				),
				error
			);
			return _react2.default.createElement(
				'div',
				null,
				this.props.showform ? _newcatform : ''
			);
		}
	}]);

	return Category;
}(_react2.default.Component);

exports.default = Category;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _AddCategoryForm = __webpack_require__(28);

var _AddCategoryForm2 = _interopRequireDefault(_AddCategoryForm);

var _EditCategoryForm = __webpack_require__(30);

var _EditCategoryForm2 = _interopRequireDefault(_EditCategoryForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_React$Component) {
	_inherits(Category, _React$Component);

	function Category(props) {
		_classCallCheck(this, Category);

		var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

		_this.state = { error: "", catformerror: "", currentCategory: "", categories: null, isLoading: true, showform: false, editform: false };
		return _this;
	}

	_createClass(Category, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.refreshData();
		}
	}, {
		key: 'refreshData',
		value: function refreshData() {
			var self = this;
			_api2.default.getCategories(function (data) {
				if (data.status == 0) {
					self.setState({ error: data.msg });
				} else {
					if (data.data != null && data.data.length > 0) {
						self.setState({ categories: data.data });
					} else {
						self.setState({ error: data.msg });
					}
					self.setState({ isLoading: false, showform: false, editform: false });
				}
			});
		}
	}, {
		key: 'onShowNewCatForm',
		value: function onShowNewCatForm() {
			this.onHideEditCatForm();
			this.setState({ currentCategory: "" });
			this.setState({ showform: true });
		}
	}, {
		key: 'onHideNewCatForm',
		value: function onHideNewCatForm() {
			this.setState({ showform: false });
		}
	}, {
		key: 'onShowEdiCatForm',
		value: function onShowEdiCatForm(cat) {
			this.onHideNewCatForm();
			this.setState({ currentCategory: "" });
			this.onHideEditCatForm();
			this.setState({ currentCategory: cat });
			this.setState({ editform: true });
		}
	}, {
		key: 'onHideEditCatForm',
		value: function onHideEditCatForm() {
			this.setState({ editform: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this;
			var catform = _react2.default.createElement(_AddCategoryForm2.default, { refreshData: this.refreshData.bind(this), catformerror: this.state.catformerror, onHideNewCatForm: this.onHideNewCatForm.bind(this), showform: this.state.showform });
			var editform = _react2.default.createElement(_EditCategoryForm2.default, { editcategory: this.state.currentCategory, refreshData: this.refreshData.bind(this), onHideEditCatForm: this.onHideEditCatForm.bind(this), editform: this.state.editform });
			var loading = _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'p',
					null,
					'---loading----'
				)
			);
			var _content = _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'info' },
					this.state.error
				)
			);
			if (this.state.categories) {
				_content = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'S.No'
								),
								_react2.default.createElement(
									'td',
									null,
									'Name'
								),
								_react2.default.createElement(
									'td',
									null,
									'Desc'
								),
								_react2.default.createElement(
									'td',
									null,
									'Action'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							this.state.categories.map(function (cat, key) {
								return _react2.default.createElement(
									'tr',
									{ key: key },
									_react2.default.createElement(
										'td',
										null,
										key
									),
									_react2.default.createElement(
										'td',
										null,
										cat.title
									),
									_react2.default.createElement(
										'td',
										null,
										cat.desc
									),
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(
											'button',
											{ onClick: self.onShowEdiCatForm.bind(self, cat) },
											'Edit'
										)
									)
								);
							})
						)
					)
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Category',
					_react2.default.createElement(
						'button',
						{ onClick: this.onShowNewCatForm.bind(this), className: 'pull-right' },
						'Add New'
					)
				),
				this.state.showform ? catform : '',
				this.state.editform ? editform : '',
				this.state.isLoading ? loading : _content
			);
		}
	}]);

	return Category;
}(_react2.default.Component);

exports.default = Category;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditCategoryForm = function (_React$Component) {
	_inherits(EditCategoryForm, _React$Component);

	function EditCategoryForm(props) {
		_classCallCheck(this, EditCategoryForm);

		var _this = _possibleConstructorReturn(this, (EditCategoryForm.__proto__ || Object.getPrototypeOf(EditCategoryForm)).call(this, props));

		_this.state = { "title": _this.props.editcategory.title, "desc": _this.props.editcategory.desc, "_id": _this.props.editcategory._id, "error": "", showform: _this.props.editform };
		return _this;
	}

	_createClass(EditCategoryForm, [{
		key: 'onHideEditCatForm',
		value: function onHideEditCatForm() {
			this.props.onHideEditCatForm();
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var change = {};
			change[e.target.name] = e.target.value;
			this.setState(change);
		}
	}, {
		key: 'onSubmitCatForm',
		value: function onSubmitCatForm() {
			var self = this;
			_api2.default.editCategories(self.state._id, self.state.title, self.state.desc, function (data) {
				if (data.status == 0) {
					self.setState({ error: data.msg });
				} else {
					self.props.refreshData();
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var error;
			if (this.state.error.length > 0) {
				error = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'error' },
						this.state.error
					)
				);
			}

			var _editcatform = _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement('input', {
						name: 'title',
						value: this.state.title,
						onChange: this.handleChange.bind(this),
						type: 'text',
						placeholder: 'Category Title'
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement('input', {
						name: 'desc',
						value: this.state.desc,
						onChange: this.handleChange.bind(this),
						type: 'text',
						placeholder: 'Category Desc'
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'button',
						{ onClick: this.onSubmitCatForm.bind(this) },
						'Update Category'
					),
					_react2.default.createElement(
						'button',
						{ className: 'pull-right', onClick: this.onHideEditCatForm.bind(this) },
						'Cancel'
					)
				),
				error
			);
			return _react2.default.createElement(
				'div',
				null,
				this.props.editform ? _editcatform : ''
			);
		}
	}]);

	return EditCategoryForm;
}(_react2.default.Component);

exports.default = EditCategoryForm;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.state = { user: null };
    return _this;
  }

  _createClass(Nav, [{
    key: 'onLogout',
    value: function onLogout() {
      this.props.onlogout();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ user: _Auth2.default.getUser() });
    }
  }, {
    key: 'render',
    value: function render() {
      var _content = _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/admin' },
            'Home'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { activeClassName: 'active', to: '/admin/post' },
            'Post'
          )
        )
      );
      if (this.state.user != null && this.state.user.role != undefined && this.state.user.role == 1) {
        _content = _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/admin' },
              'Home'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { activeClassName: 'active', to: '/admin/category' },
              'Category'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { activeClassName: 'active', to: '/admin/post' },
              'Post'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { activeClassName: 'active', to: '/admin/users' },
              'Users'
            )
          )
        );
      }
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'nav',
          null,
          _content,
          _react2.default.createElement(
            'ul',
            { className: 'pull-right' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: this.onLogout.bind(this) },
                'Logout'
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPostForm = function (_React$Component) {
		_inherits(AddPostForm, _React$Component);

		function AddPostForm(props) {
				_classCallCheck(this, AddPostForm);

				var _this = _possibleConstructorReturn(this, (AddPostForm.__proto__ || Object.getPrototypeOf(AddPostForm)).call(this, props));

				_this.state = { title: "", categories: "", catid: "-1", desc: "", catname: "", "error": "", showform: _this.props.showform };
				return _this;
		}

		_createClass(AddPostForm, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						var self = this;
						_api2.default.getCategories(function (data) {
								if (data.status == 0) {
										self.setState({ error: data.msg });
								} else {
										if (data.data != null && data.data.length > 0) {
												self.setState({ categories: data.data });
										} else {
												self.setState({ error: data.msg });
										}
								}
						});
				}
		}, {
				key: 'onHideNewPostForm',
				value: function onHideNewPostForm() {
						this.props.onHideNewPostForm();
				}
		}, {
				key: 'handleChange',
				value: function handleChange(e) {
						var self = this;
						var change = {};
						change[e.target.name] = e.target.value;
						this.setState(change);

						if (e.target.name == "catid") {
								var _data = self.state.categories.map(function (cat) {
										return cat._id;
								}).indexOf(e.target.value);
								if (self.state.categories[_data] !== undefined) {
										self.setState({ catname: self.state.categories[_data].title });
								}
						}
				}
		}, {
				key: 'onSubmitPostForm',
				value: function onSubmitPostForm() {
						console.log(this.state);
						var self = this;
						var user = _Auth2.default.getUser();
						_api2.default.addPost(self.state.title, self.state.desc, self.state.catid, self.state.catname, user._id, user.name, user.email, function (data) {
								if (data.status == 0) {
										self.setState({ error: data.msg });
								} else {
										self.props.refreshData();
								}
						});
				}
		}, {
				key: 'render',
				value: function render() {
						var _options = "";
						if (this.state.categories) {
								_options = this.state.categories.map(function (cat, key) {
										return _react2.default.createElement(
												'option',
												{ value: cat._id, key: key },
												cat.title
										);
								});
						}

						var error;
						if (this.state.error.length > 0) {
								error = _react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'div',
												{ className: 'error' },
												this.state.error
										)
								);
						}

						var _newpostform = _react2.default.createElement(
								'div',
								{ className: 'form' },
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement('input', {
												name: 'title',
												value: this.state.title,
												onChange: this.handleChange.bind(this),
												type: 'text',
												placeholder: 'Post Title'
										})
								),
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement('input', {
												name: 'desc',
												value: this.state.desc,
												onChange: this.handleChange.bind(this),
												type: 'text',
												placeholder: 'Post Desc'
										})
								),
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'select',
												{
														name: 'catid',
														value: this.state.catid,
														onChange: this.handleChange.bind(this) },
												_react2.default.createElement(
														'option',
														{ disabled: true, value: '-1' },
														'select category'
												),
												_options
										)
								),
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'button',
												{ onClick: this.onSubmitPostForm.bind(this) },
												'Create Post'
										),
										_react2.default.createElement(
												'button',
												{ className: 'pull-right', onClick: this.onHideNewPostForm.bind(this) },
												'Cancel'
										)
								),
								error
						);
						return _react2.default.createElement(
								'div',
								null,
								this.state.showform ? _newpostform : ''
						);
				}
		}]);

		return AddPostForm;
}(_react2.default.Component);

exports.default = AddPostForm;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditPostForm = function (_React$Component) {
		_inherits(EditPostForm, _React$Component);

		function EditPostForm(props) {
				_classCallCheck(this, EditPostForm);

				var _this = _possibleConstructorReturn(this, (EditPostForm.__proto__ || Object.getPrototypeOf(EditPostForm)).call(this, props));

				_this.state = { title: _this.props.post.title, categories: "", catid: _this.props.post.catid, desc: _this.props.post.desc, catname: _this.props.post.catname, "error": "", editform: _this.props.editform };
				return _this;
		}

		_createClass(EditPostForm, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
						var self = this;
						_api2.default.getCategories(function (data) {
								if (data.status == 0) {
										self.setState({ error: data.msg });
								} else {
										if (data.data != null && data.data.length > 0) {
												self.setState({ categories: data.data });
										} else {
												self.setState({ error: data.msg });
										}
								}
						});
				}
		}, {
				key: 'onHideEditPostForm',
				value: function onHideEditPostForm() {
						this.props.onHideEditPostForm();
				}
		}, {
				key: 'handleChange',
				value: function handleChange(e) {
						var self = this;
						var change = {};
						change[e.target.name] = e.target.value;
						this.setState(change);

						if (e.target.name == "catid") {
								var _data = self.state.categories.map(function (cat) {
										return cat._id;
								}).indexOf(e.target.value);
								if (self.state.categories[_data] !== undefined) {
										self.setState({ catname: self.state.categories[_data].title });
								}
						}
				}
		}, {
				key: 'onSubmitPostForm',
				value: function onSubmitPostForm() {
						var self = this;
						console.log(self.state);
						var user = _Auth2.default.getUser();
						_api2.default.editPost(self.props.post._id, self.state.title, self.state.desc, self.state.catid, self.state.catname, user._id, user.name, user.email, function (data) {
								console.log(data);
								if (data.status == 0) {
										self.setState({ error: data.msg });
								} else {
										self.props.refreshData();
								}
						});
				}
		}, {
				key: 'render',
				value: function render() {
						var _options = "";
						if (this.state.categories) {
								_options = this.state.categories.map(function (cat, key) {
										return _react2.default.createElement(
												'option',
												{ value: cat._id, key: key },
												cat.title
										);
								});
						}

						var error;
						if (this.state.error.length > 0) {
								error = _react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'div',
												{ className: 'error' },
												this.state.error
										)
								);
						}

						var _editpostform = _react2.default.createElement(
								'div',
								{ className: 'form' },
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement('input', {
												name: 'title',
												value: this.state.title,
												onChange: this.handleChange.bind(this),
												type: 'text',
												placeholder: 'Post Title'
										})
								),
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement('input', {
												name: 'desc',
												value: this.state.desc,
												onChange: this.handleChange.bind(this),
												type: 'text',
												placeholder: 'Post Desc'
										})
								),
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'select',
												{
														name: 'catid',
														value: this.state.catid,
														onChange: this.handleChange.bind(this) },
												_react2.default.createElement(
														'option',
														{ disabled: true, value: '-1' },
														'select category'
												),
												_options
										)
								),
								_react2.default.createElement(
										'div',
										{ className: 'row' },
										_react2.default.createElement(
												'button',
												{ onClick: this.onSubmitPostForm.bind(this) },
												'Update Post'
										),
										_react2.default.createElement(
												'button',
												{ className: 'pull-right', onClick: this.onHideEditPostForm.bind(this) },
												'Cancel'
										)
								),
								error
						);
						return _react2.default.createElement(
								'div',
								null,
								this.state.editform ? _editpostform : ''
						);
				}
		}]);

		return EditPostForm;
}(_react2.default.Component);

exports.default = EditPostForm;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _AddPostForm = __webpack_require__(32);

var _AddPostForm2 = _interopRequireDefault(_AddPostForm);

var _EditPostForm = __webpack_require__(33);

var _EditPostForm2 = _interopRequireDefault(_EditPostForm);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
	_inherits(Post, _React$Component);

	function Post(props) {
		_classCallCheck(this, Post);

		var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

		_this.state = { user: null, error: "", posts: null, isLoading: true, showform: false, editform: false, currentpost: "" };
		return _this;
	}

	_createClass(Post, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ user: _Auth2.default.getUser() });
			this.refreshData();
		}
	}, {
		key: 'refreshData',
		value: function refreshData() {
			var self = this;
			_api2.default.getPostByUser(function (data) {
				if (data.status == 0) {
					self.setState({ error: data.msg });
				} else {
					if (data.data != null && data.data.length > 0) {
						self.setState({ posts: data.data });
					} else {
						self.setState({ error: data.msg });
					}
					self.setState({ isLoading: false, showform: false, editform: false });
				}
			});
		}
	}, {
		key: 'onShowPostForm',
		value: function onShowPostForm() {
			this.onHideEditPostForm();
			this.setState({ currentpost: "" });
			this.setState({ showform: true });
		}
	}, {
		key: 'onHideNewPostForm',
		value: function onHideNewPostForm() {
			this.setState({ showform: false });
		}
	}, {
		key: 'onShowEditPostForm',
		value: function onShowEditPostForm(post) {
			this.onHideNewPostForm();
			this.setState({ currentpost: "" });
			this.onHideEditPostForm();
			this.setState({ currentpost: post });
			this.setState({ editform: true });
		}
	}, {
		key: 'onHideEditPostForm',
		value: function onHideEditPostForm() {
			this.setState({ editform: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this;
			var postform = _react2.default.createElement(_AddPostForm2.default, { refreshData: this.refreshData.bind(this), onHideNewPostForm: this.onHideNewPostForm.bind(this), showform: this.state.showform });
			var editform = _react2.default.createElement(_EditPostForm2.default, { post: this.state.currentpost, refreshData: this.refreshData.bind(this), onHideEditPostForm: this.onHideEditPostForm.bind(this), editform: this.state.editform });
			var loading = _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'p',
					null,
					'---loading----'
				)
			);
			var _content = _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'info' },
					this.state.error
				)
			);
			if (this.state.posts) {
				_content = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'S.No'
								),
								_react2.default.createElement(
									'td',
									null,
									'Name'
								),
								_react2.default.createElement(
									'td',
									null,
									'Desc'
								),
								_react2.default.createElement(
									'td',
									null,
									'Category'
								),
								_react2.default.createElement(
									'td',
									null,
									'By'
								),
								_react2.default.createElement(
									'td',
									null,
									'Action'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							this.state.posts.map(function (post, key) {
								return _react2.default.createElement(
									'tr',
									{ key: key },
									_react2.default.createElement(
										'td',
										null,
										key
									),
									_react2.default.createElement(
										'td',
										null,
										post.title
									),
									_react2.default.createElement(
										'td',
										null,
										post.desc
									),
									_react2.default.createElement(
										'td',
										null,
										post.catname
									),
									_react2.default.createElement(
										'td',
										null,
										post.user.name
									),
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(
											'button',
											{ onClick: self.onShowEditPostForm.bind(self, post) },
											'Edit'
										)
									)
								);
							})
						)
					)
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Post(',
					this.state.user ? this.state.user.name : "",
					')',
					_react2.default.createElement(
						'button',
						{ onClick: this.onShowPostForm.bind(this), className: 'pull-right' },
						'Add New'
					)
				),
				this.state.showform ? postform : '',
				this.state.editform ? editform : '',
				this.state.isLoading ? loading : _content
			);
		}
	}]);

	return Post;
}(_react2.default.Component);

exports.default = Post;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
	_inherits(Users, _React$Component);

	function Users(props) {
		_classCallCheck(this, Users);

		var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

		_this.state = { users: null, error: "", isLoading: true };
		return _this;
	}

	_createClass(Users, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			_api2.default.getUsers(function (data) {
				console.log(data);
				if (data.status == 0) {
					self.setState({ error: data.msg });
				} else {
					if (data.data != null && data.data.length > 0) {
						self.setState({ users: data.data });
					} else {
						self.setState({ error: data.msg });
					}
					self.setState({ isLoading: false });
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _content = "";
			var loading = _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'p',
					null,
					'---loading----'
				)
			);
			var _info = _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'info' },
					this.state.error
				)
			);
			if (this.state.users) {
				_content = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'S.No'
								),
								_react2.default.createElement(
									'td',
									null,
									'Name'
								),
								_react2.default.createElement(
									'td',
									null,
									'Email'
								),
								_react2.default.createElement(
									'td',
									null,
									'Action'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							this.state.users.map(function (user, key) {
								return _react2.default.createElement(
									'tr',
									{ key: key },
									_react2.default.createElement(
										'td',
										null,
										key
									),
									_react2.default.createElement(
										'td',
										null,
										user.name
									),
									_react2.default.createElement(
										'td',
										null,
										user.email
									),
									_react2.default.createElement('td', null)
								);
							})
						)
					)
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Users'
				),
				this.state.isLoading ? loading : "",
				this.state.error ? _info : "",
				this.state.users ? _content : ""
			);
		}
	}]);

	return Users;
}(_react2.default.Component);

exports.default = Users;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Nav = __webpack_require__(5);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	}

	_createClass(Contact, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Nav2.default, null),
				_react2.default.createElement(
					'p',
					null,
					'Contact'
				)
			);
		}
	}]);

	return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Nav = __webpack_require__(5);

var _Nav2 = _interopRequireDefault(_Nav);

var _ListPost = __webpack_require__(40);

var _ListPost2 = _interopRequireDefault(_ListPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Nav2.default, null),
				_react2.default.createElement(_ListPost2.default, null),
				this.props.children
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.state = { email: "", password: "", isloading: false, iserror: "" };
		return _this;
	}

	_createClass(Login, [{
		key: 'onLogin',
		value: function onLogin() {
			var self = this;
			this.setState({ isloading: true });
			_api2.default.getLogin(this.state.email, this.state.password, function (res) {
				self.setState({ isloading: false });
				if (res.status == 0) {
					self.setState({ iserror: res.msg });
				} else {
					_Auth2.default.login(res.data);
					self.props.history.push('/admin');
				}
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var change = {};
			change[e.target.name] = e.target.value;
			this.setState(change);
		}
	}, {
		key: 'render',
		value: function render() {
			var error;
			if (this.state.iserror.length > 0) {
				error = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'error' },
						this.state.iserror
					)
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'form' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement('input', {
							name: 'email',
							value: this.state.email,
							onChange: this.handleChange.bind(this),
							type: 'text',
							placeholder: 'Username'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement('input', {
							name: 'password',
							value: this.state.password,
							onChange: this.handleChange.bind(this),
							type: 'password',
							placeholder: 'Password'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'button',
							{ onClick: this.onLogin.bind(this) },
							'Login'
						)
					),
					error
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Regsiter = function (_React$Component) {
	_inherits(Regsiter, _React$Component);

	function Regsiter(props) {
		_classCallCheck(this, Regsiter);

		var _this = _possibleConstructorReturn(this, (Regsiter.__proto__ || Object.getPrototypeOf(Regsiter)).call(this, props));

		_this.state = { email: "", password: "", "name": "", isloading: false, iserror: "" };
		return _this;
	}

	_createClass(Regsiter, [{
		key: 'onLogin',
		value: function onLogin() {
			var self = this;
			this.setState({ isloading: true });
			_api2.default.getRegister(this.state.email, this.state.password, this.state.name, function (res) {
				console.log(res);
				self.setState({ isloading: false });
				if (res.status == 0) {
					self.setState({ iserror: res.msg });
				} else {
					browserHistory.push("/admin");
				}
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var change = {};
			change[e.target.name] = e.target.value;
			this.setState(change);
		}
	}, {
		key: 'render',
		value: function render() {
			var error;
			if (this.state.iserror.length > 0) {
				error = _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'error' },
						this.state.iserror
					)
				);
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'form' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement('input', {
							name: 'email',
							value: this.state.email,
							onChange: this.handleChange.bind(this),
							type: 'text',
							placeholder: 'Username'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement('input', {
							name: 'password',
							value: this.state.password,
							onChange: this.handleChange.bind(this),
							type: 'password',
							placeholder: 'Password'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement('input', {
							name: 'name',
							value: this.state.name,
							onChange: this.handleChange.bind(this),
							type: 'text',
							placeholder: 'Name'
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'button',
							{ onClick: this.onLogin.bind(this) },
							'Login'
						)
					),
					error
				)
			);
		}
	}]);

	return Regsiter;
}(_react2.default.Component);

exports.default = Regsiter;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPost = function (_React$Component) {
  _inherits(ListPost, _React$Component);

  function ListPost(props) {
    _classCallCheck(this, ListPost);

    var _this = _possibleConstructorReturn(this, (ListPost.__proto__ || Object.getPrototypeOf(ListPost)).call(this, props));

    _this.state = { posts: [], error: "", isLoading: true };
    return _this;
  }

  _createClass(ListPost, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _api2.default.getPosts(function (data) {
        if (data.status == 0) {
          self.setState({ error: data.msg });
        } else {
          if (data.data != null && data.data.length > 0) {
            self.setState({ posts: data.data });
          } else {
            self.setState({ error: data.msg });
          }
          self.setState({ isLoading: false });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;

      var _posts = _react2.default.createElement(
        'ul',
        null,
        self.state.posts.map(function (post, key) {
          return _react2.default.createElement(
            'li',
            { key: key },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "post/" + post.slug },
              post.title
            )
          );
        })
      );
      var _loader = _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'info' },
          'Loading'
        )
      );

      return _react2.default.createElement(
        'section',
        { className: 'content postlist' },
        this.state.posts ? _posts : _loader
      );
    }
  }]);

  return ListPost;
}(_react2.default.Component);

exports.default = ListPost;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _nav = __webpack_require__(44);

var _nav2 = _interopRequireDefault(_nav);

var _DateFormat = __webpack_require__(22);

var _DateFormat2 = _interopRequireDefault(_DateFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostDetail = function (_React$Component) {
  _inherits(PostDetail, _React$Component);

  function PostDetail(props) {
    _classCallCheck(this, PostDetail);

    var _this = _possibleConstructorReturn(this, (PostDetail.__proto__ || Object.getPrototypeOf(PostDetail)).call(this, props));

    _this.state = { post: "", error: "", isLoading: true };
    return _this;
  }

  _createClass(PostDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _api2.default.getPost(this.props.match.params.post, function (data) {
        console.log(data);
        if (data.status == 0) {
          self.setState({ error: data.msg });
        } else {
          if (data.data != null) {
            self.setState({ post: data.data });
          } else {
            self.setState({ error: data.msg });
          }
          self.setState({ isLoading: false });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var _post = _react2.default.createElement(
        'div',
        { className: 'postdetail' },
        _react2.default.createElement(
          'h1',
          null,
          self.state.post.title,
          _react2.default.createElement(
            'span',
            { className: 'pull-right dull' },
            (0, _DateFormat2.default)(self.state.post.created_at)
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          self.state.post.desc
        )
      );
      var _loader = _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'info' },
          'Loading'
        )
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_nav2.default, null),
        _react2.default.createElement(
          'section',
          { className: 'content' },
          this.state.post ? _post : _loader
        )
      );
    }
  }]);

  return PostDetail;
}(_react2.default.Component);

exports.default = PostDetail;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Config = {
	baseurl: "http://localhost:3000/api/",
	getLoginUrl: function getLoginUrl() {
		return this.baseurl + "login";
	},
	getRegisterUrl: function getRegisterUrl() {
		return this.baseurl + "user";
	},
	getProfileUpdateUrl: function getProfileUpdateUrl(id) {
		return this.baseurl + "user/" + id;
	},
	getUserDeleteUrl: function getUserDeleteUrl(id) {
		return this.baseurl + "user/" + id;
	},
	getUserByIdUrl: function getUserByIdUrl(id) {
		return this.baseurl + "user/" + id;
	},
	getUsersUrl: function getUsersUrl() {
		return this.baseurl + "user";
	},
	getCatCreateUrl: function getCatCreateUrl() {
		return this.baseurl + "category";
	},
	getAllCatUrl: function getAllCatUrl() {
		return this.baseurl + "category";
	},
	getCatByIdUrl: function getCatByIdUrl(id) {
		return this.baseurl + "category/" + id;
	},
	getUpdateCatUrl: function getUpdateCatUrl(id) {
		return this.baseurl + "category/" + id;
	},
	getPostCreateUrl: function getPostCreateUrl() {
		return this.baseurl + "post";
	},
	getAllPostsUrl: function getAllPostsUrl() {
		return this.baseurl + "post";
	},
	getPostByIdUrl: function getPostByIdUrl(id) {
		return this.baseurl + "post/" + id;
	},
	getPostByUserUrl: function getPostByUserUrl(user) {
		if (user.role == 1) {
			return this.baseurl + "post";
		} else {
			return this.baseurl + "postbyuser/" + user._id;
		}
	},
	getPostBySlugrl: function getPostBySlugrl(slug) {
		return this.baseurl + "postbyslug/" + slug;
	},
	getUpdatePostUrl: function getUpdatePostUrl(id) {
		return this.baseurl + "post/" + id;
	},
	getDeletePostUrl: function getDeletePostUrl(id) {
		return this.baseurl + "post/" + id;
	}
};
exports.default = Config;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Nav = __webpack_require__(5);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Nav2.default, null),
				_react2.default.createElement(
					'p',
					null,
					'Page Not Found'
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Auth = __webpack_require__(3);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

		_this.state = { islogin: false };
		return _this;
	}

	_createClass(Nav, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			if (_Auth2.default.isloggedin()) {
				self.setState({ islogin: true });
			}
		}
	}, {
		key: 'onLogout',
		value: function onLogout() {
			_Auth2.default.logout(function () {
				window.location.reload();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _content = _react2.default.createElement(
				'ul',
				{ className: 'pull-right' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ to: '/login' },
						'Login'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ to: '/register' },
						'Regsiter'
					)
				)
			);
			if (this.state.islogin) {
				_content = _react2.default.createElement(
					'ul',
					{ className: 'pull-right' },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouterDom.NavLink,
							{ to: '/admin' },
							'Dashboard'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'button',
							{ onClick: this.onLogout.bind(this) },
							'Logout'
						)
					)
				);
			}
			return _react2.default.createElement(
				'section',
				null,
				_react2.default.createElement(
					'nav',
					null,
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ exact: true, activeClassName: 'active', to: '/' },
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ activeClassName: 'active', to: '/about' },
								'About'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouterDom.NavLink,
								{ activeClassName: 'active', to: '/contact' },
								'Contact'
							)
						)
					),
					_content
				)
			);
		}
	}]);

	return Nav;
}(_react2.default.Component);

exports.default = Nav;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map