import React from 'react';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/sign-in', req)
      .then(res => res.json())
      .then(result => {
        window.location.hash = 'search';
        this.props.handleSignIn(result);
        this.setState({
          username: '',
          password: ''
        });
      });

  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="container-fluid pb-3 col-10 col-md-8">
        <h1 className="catamaran text-shadow mt-3">Log In</h1>
        <form className='row bg-white px-3 px-md-5 mb-3 pt-4 rounded-3 shadow justify-content-center' onSubmit={this.handleSubmit}>
          <div className='col-10 row justify-content-center'>
            <label htmlFor='username' className='p-0' name="username">Username</label>
            <input type="text" className="form-control cairo mb-3 border-dark border-2" id="username" value={this.state.username} onChange={this.handleUsername}></input>
            <label htmlFor='password' className='p-0' name="password">Password</label>
            <input type="password" className="form-control cairo mb-3 border-dark border-2" id="password" value={this.state.password} onChange={this.handlePassword}></input>
            <div className="container-fluid justify-content-center col-12 mt-3 mb-2 p-0">
              <button type="submit" className="bg-orange btn btn-lg p-0  btn-outline-secondary text-light col-12 cairo shadow btn-h-55 align-center">Log In</button>
            </div>
            <a href='#sign-up' className='mb-4'>Need to create an account?</a>
          </div>
        </form>
      </div>
    );
  }
}
