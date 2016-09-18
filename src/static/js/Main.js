(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Home = React.createClass({displayName: "Home",
  render: function () {
    return(
      React.createElement("div", null, 
        React.createElement("div", {className: "jumbotron"}, 
          React.createElement("div", {className: "container text-center"}, 
            React.createElement("h1", null, "Home"), 
            React.createElement("p", null, "This is the home page")
          )
        )
      )
    )
  }
});

module.exports = Home;

},{}],2:[function(require,module,exports){
var Home = require('./Home.jsx')

var Login = React.createClass( {displayName: "Login",
  render: function (){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "jumbotron"}, 
          React.createElement("div", {className: "container text-center"}, 
            React.createElement("h1", null, "Login"), 
            React.createElement("div", null, 
              React.createElement("input", {id: "username", type: "text", placeholder: "Username"}), 
              React.createElement("br", null), 
              React.createElement("input", {id: "password", type: "password", placeholder: "Password"}), 
              React.createElement(SubmitButton, {userChange: this.props.userChange, changeView: this.props.handleClick})
            )
          )
        )
      )
    )
  }
})

var SubmitButton = React.createClass( {displayName: "SubmitButton",
  getInitialState: function () {
      return({message: ''})
  },

  handleClick: function () {
    if (document.getElementById('username').value === 'admin') {
      if (document.getElementById('password').value === 'admin') {
        this.setState({message: 'Login successful'})
        this.props.userChange('admin')
        this.props.changeView(React.createElement(Home, null))
      }
    } else {
      this.setState({message: 'Login failed'})
    }
  },

  render: function () {
    var message = ''
    return(
      React.createElement("div", null, 
        React.createElement("p", null, this.state.message), 
        React.createElement("input", {type: "submit", value: "Login", onClick: this.handleClick})
      )
    )
  }
})

module.exports = Login

},{"./Home.jsx":1}],3:[function(require,module,exports){
var Projects = React.createClass({displayName: "Projects",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "jumbotron"}, 
          React.createElement("div", {className: "container text-center"}, 
            React.createElement("h1", null, "Projects"), 
            React.createElement("p", null, "This page contains links to my projects on github")
          )
        ), 
        React.createElement("div", {id: "Rows"}, 
          React.createElement(Row1, null), 
          React.createElement(Row2, null)
        ), 
        React.createElement("br", null), 
        React.createElement("br", null)
      )
      );
  }
})

var Project = React.createClass({displayName: "Project",
  render: function() {
    return (
      React.createElement("div", {className: "col-sm-3"}, 
        React.createElement("p", null, this.props.name), 
        React.createElement("a", {href: this.props.link}, React.createElement("img", {src: this.props.image, className: "img-responsive", style: {width: '100%'}, alt: "Image"}))
      )
    )
  }
});

var Row1 = React.createClass({displayName: "Row1",
  render: function() {
    return (
      React.createElement("div", {className: "container-fluid bg-3 text-center"}, 
        React.createElement("br", null), 
        React.createElement("div", {className: "row"}, 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"})
        )
      )
    )
  }
});

var Row2 = React.createClass({displayName: "Row2",
  render: function() {
    return (
      React.createElement("div", {className: "container-fluid bg-3 text-center"}, 
        React.createElement("br", null), 
        React.createElement("div", {className: "row"}, 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"})
        )
      )
    )
  }
});
module.exports = Projects;

},{}],4:[function(require,module,exports){
var Home = require('./Home.jsx')
var Projects = require('./Projects.jsx')
var Login = require('./Login.jsx')

var Main = React.createClass({displayName: "Main",
  getInitialState: function () {
    return {view: React.createElement(Home, null),
            username: '',
            logedin: false}
  },

  userChange: function (value) {
    this.setState({username: value})
  },

  handleClick: function (value) {
    this.setState({view: value})
  },

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, 
          React.createElement(Header, {handleClick: this.handleClick, userChange: this.userChange, username: this.state.username})
        ), 
        React.createElement("div", null, 
          this.state.view
        )
      )
    )
  }
})

var Header = React.createClass({displayName: "Header",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("nav", {className: "navbar navbar-inverse"}, 
          React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "navbar-header"}, 
              React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar"}, 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              ), 
              React.createElement(HomeButton, {handleClick: this.props.handleClick, username: this.props.username})
            ), 
            React.createElement("div", {className: "collapse navbar-collapse", id: "myNavbar"}, 
              React.createElement(NavBar, {handleClick: this.props.handleClick}), 
              React.createElement(LoginButton, {handleClick: this.props.handleClick, userChange: this.props.userChange, username: this.props.username})
            )
          )
        )
      )
  ) }
})

var NavBar = React.createClass({displayName: "NavBar",
  render: function () {
    return (
      React.createElement("ul", {className: "nav navbar-nav"}, 
        React.createElement(ProjectsButton, {handleClick: this.props.handleClick})
      )
    )
  }
})

var ProjectsButton = React.createClass({displayName: "ProjectsButton",
  handleClick: function () {
    this.props.handleClick(React.createElement(Projects, null))
  },

  render: function () {
    return (
      React.createElement("li", {onClick: this.handleClick}, React.createElement("a", null, "Projects"))
    )
  }
})

var HomeButton = React.createClass({displayName: "HomeButton",
  handleClick: function () {
    this.props.handleClick(React.createElement(Home, null))
  },

  render: function () {
    var username = this.props.username
    if (username === '') {
      username = 'Matthew Tilton'
    } else {
      username = this.props.username
    }
    return (
      React.createElement("a", {className: "navbar-brand", onClick: this.handleClick}, username)
    )
  }
})

var LoginButton = React.createClass({displayName: "LoginButton",
  handleClick: function () {
    if (this.props.username === '') {
      this.props.handleClick(React.createElement(Login, {userChange: this.props.userChange, handleClick: this.props.handel}))
    } else {
      this.props.userChange('')
    }
  },

  render: function () {
    if (this.props.username === '') {
      return (
        React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
          React.createElement("li", {onClick: this.handleClick}, React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-log-in"}), " Login"))
        )
      )
    } else {
      return (
        React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
          React.createElement("li", {onClick: this.handleClick}, React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-log-out"}), " Logout"))
        )
      )
    }
  }
})

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'))

},{"./Home.jsx":1,"./Login.jsx":2,"./Projects.jsx":3}]},{},[4]);
