import React from 'react';
import Loading from './loading';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null,
      isLoading: false
    };
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(props) {
    this.setState({ isLoading: true });
    fetch(`/api/tags/${this.props.tag}`)
      .then(res => res.json())
      .then(entries => {
        this.setState({ entries });
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    if (this.state.entries === null || this.state.entries.error) {
      return (
        <div className="container-fluid pb-3 row justify-content-center m-0">
          <h1 className="catamaran text-shadow mt-3 col-md-9">Results</h1>
          <div className='row justify-content-center'>
            <div className='row justify-content-start align-content-center col-md-10 ms-md-3'>
                <h4 className='text-center cairo'>No Entries Found</h4>
            </div>
          </div>
        </div>
      );
    }
    return (
        <div className="container-fluid pb-3 row justify-content-center m-0">
          <h1 className="catamaran text-shadow mt-3 col-md-9">Results</h1>
          <div className='row justify-content-center'>
            <div className='row justify-content-start align-content-center col-md-10 ms-md-3'>
              {
                this.state.entries.map(entry => (
                  <a href={`#entry?entryId=${entry.entryId}`} key={entry.entryId} role="button" className="text-decoration-none card col-lg-3 col-md-5 mt-3 m-md-3 p-0 rounded border-hover border-0">
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
