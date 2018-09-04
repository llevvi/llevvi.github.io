'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Bio = function (_React$Component) {
  _inherits(Bio, _React$Component);

  function Bio(props) {
    _classCallCheck(this, Bio);

    return _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).call(this, props));
  }

  _createClass(Bio, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Leandro Vicente"
        ),
        React.createElement(
          "h2",
          null,
          "Sofware Developer and Content Creator"
        ),
        React.createElement(
          "ul",
          { className: "redes" },
          React.createElement(
            "li",
            null,
            React.createElement("a", { className: "fa fa-linkedin fa-2x", href: "https://www.linkedin.com/in/leandrovicentesilva/", target: "_blank" })
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { className: "fa fa-youtube-play fa-2x", href: "http://youtube.com/levvitalk", target: "_blank" })
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { className: "fa fa-instagram fa-2x", href: "http://instagram.com/levvitalk", target: "_blank" })
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { className: "fa fa-twitter fa-2x", href: "http://twitter.com/levvitalk", target: "_blank" })
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { className: "fa fa-facebook-square fa-2x", href: "http://facebook.com/levvitalk", target: "_blank" })
          )
        )
      );
    }
  }]);

  return Bio;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(e(Bio), domContainer);