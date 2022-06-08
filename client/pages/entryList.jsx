import React from 'react';

export default class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount(props) {
    fetch(`/api/users/${this.props.userId}/entries`)
      .then(res => res.json())
      .then(entries => {
        this.setState({ entries });
      });
  }

  render(props) {
    return (
      <div className ="container-fluid pb-3 row justify-content-center m-0">
        <h1 className="catamaran text-shadow mt-3 col-md-9">Entries</h1>
        <div className='row justify-content-center'>
          <div className='row justify-content-start align-content-center col-md-10 ms-md-3'>
          {
            this.state.entries.map(entry => (
              <a href={`http://localhost:3000/#entry?entryId=${entry.entryId}`} key={entry.entryId} role="button" className="text-decoration-none card col-lg-3 col-md-5 mt-3 m-md-3 p-0 rounded border-hover border-0">
                <img src={entry.imageUrl} className="h-75 card-img-top bg-black"></img>
                <div className='card-body p-0 row align-items-center ps-2'>
                  <h5 className='cairo-bold card-title m-0'>{entry.title}</h5>
                </div>
              </a>
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}
