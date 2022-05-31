import React from 'react';

export default function EntryForm(props) {
  return (
    <div className = "container-fluid col-10 pb-3">
      <h1 className = "catamaran text-shadow mt-3">Create Entry</h1>
      <form className='row bg-white px-5 mb-3 pt-4 rounded-3 shadow'>
        <div className='col-12 col-md-6'>
        <div className="form-group">
          <label htmlFor="formFile" className="form-label cairo">Upload Image</label>
            <input className="form-control mb-2" type="file" id="formFile"></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="title" className="cairo">Title</label>
          <input type="title" className="form-control text-center" id="title"></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description" className='cairo'>Description</label>
          <textarea className="form-control" id="description" rows="4"></textarea>
        </div>
          <div className="form-group mb-2">
          <label htmlFor="printer" className='cairo'>Printer</label>
            <input type="printer" className="form-control text-center" id="printer"></input>
        </div>
          <div className="form-group position-relative mb-2">
          <label htmlFor="filamentUsed" className='cairo'>Total Filament Used</label>
            <input type="filamentUsed" className="form-control text-center" id="filamentUsed"></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">Grams</span>
        </div>
          <div className="form-group row justify-content-between cairo mb-2">
            <label htmlFor="filament" className="cairo">Time to Print</label>
          <span className='col-6 cairo'>
              <input type="hours" className="form-control col-6 cairo" id="hours" placeholder="Hours"></input>
          </span>
          <span className='col-6 cairo'>
              <input type="hours" className="form-control cairo" id="minutes" placeholder="Minutes"></input>
          </span>
       </div>
          <div className="form-group mb-2 position-relative">
            <label htmlFor="printSpeed" className='cairo'>Print Speed</label>
            <input type="printSpeed" className="form-control text-center" id="printSpeed" ></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm/s</span>
        </div>
        </div>
        <div className='col-12 col-md-6'>
        <label htmlFor="supports" className='mb-2 cairo'>Supports</label>
        <select type="supports" className="form-select cairo mb-2" aria-label="Default select example">
          <option selected>Were supports used?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <div className="form-group position-relative">
            <label htmlFor="layerHeight" className='cairo'>Layer Height</label>
            <input type="layerHeight" className="form-control mb-2 text-center" id="layerHeight" ></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm</span>
        </div>
        <div className="form-group position-relative">
          <label htmlFor="wallThickness" className='cairo'>Wall Thickness</label>
            <input type="wallThickness" className="form-control mb-2 text-center" id="wallThickness"></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm</span>
        </div>
        <div className="form-group">
          <label htmlFor="description" className='cairo'>Additional Details</label>
          <textarea className="form-control mb-2" id="description" rows="4" placeholder='Enter any additional details'></textarea>
        </div>
        <div className="mb-2">
            <label htmlFor="objectFiles" className=" cairo">Object File(s)</label>
          <input className="form-control" type="file" id="objectFiles" multiple></input>
        </div>
          <div className="form-group mb-2">
            <label htmlFor="searchTags" className='cairo'>Search Tags</label>
            <textarea className="form-control" id="searchTags" rows="4" placeholder='Enter tags so others can find your print! eg(plant nature outdoors)'></textarea>
          </div>
        </div>
        <div className="container-fluid justify-content-center col-12 mt-3 mb-5">
          <button type="submit" className="btn btn-lg bg-orange p-3  btn-outline-secondary text-light col-12 cairo shadow" >Save</button>
        </div>
      </form>
   </div>
  );
}
