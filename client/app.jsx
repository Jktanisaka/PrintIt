import React from 'react';
import MainNavbar from './pages/navBar';
import EntryForm from './pages/entryForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='bg-gray'>
    <MainNavbar />
    <EntryForm />
    </div>
    );
  }
}
