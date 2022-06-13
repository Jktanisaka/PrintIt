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
    if (this.state.tag !== ' ') {
      window.location.hash = 'search?tag=' + this.state.tag;
    }
  }

  handleSearchInput(event) {
    this.setState({ tag: event.target.value });
  }

  render() {
    return (
        <div className='container-fluid bg-gray d-flex justify-content-center flex-column'>
          <h2 className='text-center cairo mt-5 text-shadow f-28'>Find a Print</h2>
          <form className=' d-flex justify-content-center mt-2' onSubmit={this.handleSubmit}>
            <input type="text" placeholder = "Search" className="search-box col-md-4 rounded orange-styling ps-2" onChange={this.handleSearchInput}></input>
            <button type="submit" className='rounded orange-styling'>Submit</button>
          </form>
        </div>
    );

  }
}
