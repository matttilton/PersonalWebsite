var Login = React.createClass( {
  render: function (){
    return (
      <div>
        <div className='jumbotron'>
          <div className='container text-center'>
            <h1>Login</h1>
            <div>
              <input type='text' placeholder='Username'></input>
              <br />
              <input type='password' placeholder='Password'></input>
              <br />
              <input type='submit' value='Login'></input>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = Login
