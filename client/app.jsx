import React from 'react';
import MainNavbar from './pages/navBar';
import EntryForm from './pages/entryForm';
import EntryList from './pages/entryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <EntryForm />;
    }
    if (route.path === 'entries') {
      return <EntryList />;
    }

  }

  render() {
    return (
      <div className='bg-gray'>
    <MainNavbar />
    {this.renderPage()}
    </div>
    );
  }
}
