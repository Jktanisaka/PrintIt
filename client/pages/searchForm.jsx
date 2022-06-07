import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.state = {
      tag: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.hash = 'search?tag=' + this.state.tag;
  }

  handleSearchInput(event) {
    this.setState({ tag: event.target.value });
  }

  render() {
    return (
        <div className='container-fluid bg-gray d-flex justify-content-center flex-column'>
          <h2 className='text-center  cairo mt-3'>Find a Print</h2>
          <form className=' d-flex justify-content-center' onSubmit={this.handleSubmit}>
            <input type="rounded" onChange={this.handleSearchInput}></input>
            <button type="submit" className=' rounded'>Submit</button>
          </form>
        </div>
    );

  }
}
