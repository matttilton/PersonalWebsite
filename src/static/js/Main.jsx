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
          React.createElement(Project, {name: "PySteg", link: "https://github.com/matttilton/PySteg", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "EulerProjects", link: "https://github.com/matttilton/EulerProjects", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Sgepong", link: "https://github.com/matttilton/Sgepong", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "IpScanner", link: "https://github.com/matttilton/IpScanner", image: "http://placehold.it/150x80?text=IMAGE"})
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
          React.createElement(Project, {name: "This Site", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"}), 
          React.createElement(Project, {name: "Empty", link: "#", image: "http://placehold.it/150x80?text=IMAGE"})
        )
      )
    )
  }
});
module.exports = Projects;

},{}],3:[function(require,module,exports){
var Home = require('./Home.jsx')
var Projects = require('./Projects.jsx')

var Main = React.createClass({displayName: "Main",
  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {id: "Header"}, 
          React.createElement(Header, null)
        ), 
        React.createElement("div", {id: "content"}, 
          React.createElement(Projects, null)
        )
      )
    );
  }
});

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
            React.createElement(HomeButton, null)
          ), 
          React.createElement("div", {className: "collapse navbar-collapse", id: "myNavbar"}, 
            React.createElement(NavBar, null), 
            React.createElement(LoginButton, null)
          )
        )
      )
    )
  ) }
});

var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    return(
      React.createElement("ul", {className: "nav navbar-nav"}, 
        React.createElement(ProjectsButton, null)
      )
    )
  }
});

var ProjectsButton = React.createClass({displayName: "ProjectsButton",
  render: function() {
    return(
      React.createElement("li", null, React.createElement("a", {href: "#"}, "Projects"))
    )
  }
});

var HomeButton = React.createClass({displayName: "HomeButton",
  render: function() {
    return(
      React.createElement("a", {className: "navbar-brand", href: "#"}, "Matthew Tilton")
    )
  }
});

var LoginButton = React.createClass({displayName: "LoginButton",
  render: function() {
    return(
      React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
        React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-log-in"}), " Login"))
      )
    )
  }
})


ReactDOM.render(React.createElement(Main, null), document.getElementById('main'))

},{"./Home.jsx":1,"./Projects.jsx":2}]},{},[3]);
