import React from 'react';

// fetch('/api/1/entries')
//   .then(res => res.json())
//   .then(entries => this.setState({ entries }));
export default class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('/api/users/1/entries')
      .then(res => res.json())
      .then(entries => {
        this.setState({ entries });
      });
  }

  render(props) {
    return (
      <div className ="container-fluid col-10 pb-3">
        <h1 className="catamaran text-shadow mt-3">Entries</h1>
        <div className='row justify-content-center'>
        {
          this.state.entries.map(entry => (
            <div key={entry.entryId} className="card col-sm-10 col-md-6 col-lg-3">
              <img src={entry.imageUrl} className="h-75 card-img-top col-12"></img>
              <h5 className='cairo-bold'>{entry.title}</h5>
              </div>
          ))
        }
        </div>
      </div>
    );
  }
}
