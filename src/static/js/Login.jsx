(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
              React.createElement("input", {id: "password", type: "text", placeholder: "Password"}), 
              React.createElement(SubmitButton, {userChange: this.props.userChange})
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

},{}]},{},[1]);
