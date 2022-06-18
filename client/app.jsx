import React from 'react';
import MainNavbar from './pages/nav-bar';
import SearchForm from './pages/search-form';
import SearchResults from './pages/search-results';
import jwtDecode from 'jwt-decode';
import LogIn from './pages/log-in';
import EntryForm from './pages/entry-form';
import EntryList from './pages/entry-list';
import EntryView from './pages/entry-view';
import SignUp from './pages/sign-up';
import Loading from './pages/loading';

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
    this.handleSignOut = this.handleSignOut.bind(this);
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

  handleSignOut() {
    window.localStorage.removeItem('react-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { route } = this.state;
    if (this.state.isLoading === true) {
      return <Loading />;
    }
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
      return <SearchResults handleLoading={this.handleLoading} tag = {tag}/>;
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
    return <SearchForm />;
  }

  render() {
    return (
      <div className='bg-gray full-height'>
        <MainNavbar user={this.state.user} onSignOut={this.handleSignOut}/>
        {this.renderPage()}
      </div>
    );
  }
}
