var Home = require('./Home.jsx')
var Projects = require('./Projects.jsx')
var Login = require('./Login.jsx')

var Main = React.createClass({
  getInitialState: function() {
    return {view: <Home />}
  },
  handleClick: function(value){
    this.setState({view: value})
  },
  render: function() {
    return (
      <div>
        <div>
          <Header handleClick={this.handleClick} />
        </div>
        <div>
          {this.state.view}
        </div>
      </div>
    );
  }
});

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <HomeButton handleClick={this.props.handleClick} />
            </div>
            <div className='collapse navbar-collapse' id='myNavbar'>
              <NavBar handleClick={this.props.handleClick} />
              <LoginButton handleClick={this.props.handleClick} />
            </div>
          </div>
        </nav>
      </div>
  ) }
});

var NavBar = React.createClass({
  render: function () {
    return (
      <ul className='nav navbar-nav'>
        <ProjectsButton handleClick={this.props.handleClick} />
      </ul>
    )
  }
});

var ProjectsButton = React.createClass({
  handleClick: function () {
    this.props.handleClick(<Projects />)
  },

  render: function () {
    return(
      <li onClick={this.handleClick}><a>Projects</a></li>
    )
  }
});

var HomeButton = React.createClass({
  handleClick: function () {
    this.props.handleClick(<Home />)
  },
  render: function () {
    return(
      <a className='navbar-brand' onClick={this.handleClick}>Matthew Tilton</a>
    )
  }
});

var LoginButton = React.createClass({
  handleClick: function () {
    this.props.handleClick(<Login />)
  },

  render: function () {
    return(
      <ul className='nav navbar-nav navbar-right'>
        <li onClick={this.handleClick}><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
      </ul>
    )
  }
});


ReactDOM.render(<Main />, document.getElementById('main'))
