import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
    <div className="text-center align-content-center mt-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    );
  }
}
