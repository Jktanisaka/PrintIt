import React from 'react';
import MainNavbar from './pages/navBar';
import SearchForm from './pages/searchForm';
import SearchResults from './pages/searchResults';
import jwtDecode from 'jwt-decode';
import LogIn from './pages/logIn';
import EntryForm from './pages/entryForm';
import EntryList from './pages/entryList';
import EntryView from './pages/entryView';
import SignUp from './pages/signUp';

import 'bootstrap/dist/css/bootstrap.min.css';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
    const token = window.localStorage.getItem('react-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user });
  }

  handleSignIn(results) {
    const { user, token } = results;
    window.localStorage.setItem('react-jwt', token);
    this.setState({ user });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'create') {
      return <EntryForm userId = {this.state.user.userId}/>;
    }
    if (route.path === 'entries') {
      const userId = this.state.route.params.get('userId');
      return <EntryList userId = {userId}/>;
    }
    if (route.path === 'entry') {
      const entryId = this.state.route.params.get('entryId');
      return <EntryView entryId = {entryId}/>;
    }
    if (route.path === 'search' && this.state.route.params.get('tag')) {
      const tag = this.state.route.params.get('tag');
      return <SearchResults tag = {tag}/>;
    }
    if (route.path === 'search') {
      return <SearchForm />;
    }
    if (route.path === 'sign-up') {
      return <SignUp />;
    }
    if (route.path === 'log-in') {
      return <LogIn handleSignIn={this.handleSignIn}/>;
    }
  }

  render() {
    return (
      <div className='bg-gray full-height'>
        <MainNavbar user={this.state.user}/>
        {this.renderPage()}
      </div>
    );
  }
}
