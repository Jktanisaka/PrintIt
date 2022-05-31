import React from 'react';

export default function EntryForm(props) {
  return (
    <div className = "container-fluid col-10">
      <h1 className = "catamaran text-shadow mt-3">Create Entry</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label cairo">Upload Image</label>
          <input className="form-control" type="file" id="formFile"></input>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="cairo">Title</label>
          <input type="title" className="form-control" id="title"></input>
        </div>
        <div className="form-group">
          <label htmlFor="description" className='cairo'>Description</label>
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="printer" className='cairo'>Printer</label>
          <input type="printer" className="form-control" id="printer"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="filament" className="form-label">Total Filament Used</label>
          <input type="hours" className="form-control" id="hours" placeholder="Hours"></input>
          <input type="hours" className="form-control" id="minutes" placeholder="Minutes"></input>
        </div>
        <div className="container-fluid justify-content-center">
          <button type="submit" className="btn bg-orange" >Save</button>
        </div>

      </form>
   </div>
  );
}
