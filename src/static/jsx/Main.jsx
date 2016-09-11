var Home = require('./Home.jsx')
var Projects = require('./Projects.jsx')

var Main = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div>
        <div id='Header'>
          <Header />
        </div>
        <div id="content">
          <Projects />
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
            <HomeButton />
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <NavBar />
            <LoginButton />
          </div>
        </div>
      </nav>
    </div>
  ) }
});

var NavBar = React.createClass({
  render: function() {
    return(
      <ul className='nav navbar-nav'>
        <ProjectsButton />
      </ul>
    )
  }
});

var ProjectsButton = React.createClass({
  render: function() {
    return(
      <li><a href='#'>Projects</a></li>
    )
  }
});

var HomeButton = React.createClass({
  render: function() {
    return(
      <a className='navbar-brand' href='#'>Matthew Tilton</a>
    )
  }
});

var LoginButton = React.createClass({
  render: function() {
    return(
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='#'><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
      </ul>
    )
  }
})


ReactDOM.render(<Main />, document.getElementById('main'))
