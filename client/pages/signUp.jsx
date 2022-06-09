import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    fetch('/api/auth/sign-up', req)
      .then(res => res.json())
      .then(result => {
        window.location.hash = 'sign-in';
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
      <h1 className="catamaran text-shadow mt-3">Sign Up</h1>
      <form className='row bg-white px-3 px-md-5 mb-3 pt-4 rounded-3 shadow justify-content-center' onSubmit={this.handleSubmit}>
        <div className='col-10 row justify-content-center'>
          <label htmlFor='username' className='p-0' name="username">Username</label>
          <input type="text" className="form-control cairo mb-3 border-dark border-2" id="username" value={this.state.username} onChange={this.handleUsername}></input>
          <label htmlFor='password' className='p-0' name="password">Password</label>
          <input type="password" className="form-control cairo mb-3 border-dark border-2" id="password" value={this.state.password} onChange={this.handlePassword}></input>
          <div className="container-fluid justify-content-center col-12 mt-3 mb-5 p-0">
            <button type="submit" className="bg-orange btn btn-lg p-3  btn-outline-secondary text-light col-12 cairo shadow">Register</button>
          </div>
        </div>
      </form>
    </div>
    );
  }
}
