var Home = require('./Home.jsx')

var Login = React.createClass( {
  render: function (){
    return (
      <div>
        <div className='jumbotron'>
          <div className='container text-center'>
            <h1>Login</h1>
            <div>
              <input id='username' type='text' placeholder='Username'></input>
              <br />
              <input id='password' type='text' placeholder='Password'></input>
              <SubmitButton userChange={this.props.userChange} changeView={this.props.handleClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

var SubmitButton = React.createClass( {
  getInitialState: function () {
      return({message: ''})
  },

  handleClick: function () {
    if (document.getElementById('username').value === 'admin') {
      if (document.getElementById('password').value === 'admin') {
        this.setState({message: 'Login successful'})
        this.props.userChange('admin')
        this.props.changeView(<Home />)
      }
    } else {
      this.setState({message: 'Login failed'})
    }
  },

  render: function () {
    var message = ''
    return(
      <div>
        <p>{this.state.message}</p>
        <input type='submit' value='Login' onClick={this.handleClick}></input>
      </div>
    )
  }
})

module.exports = Login
