import React from 'react';

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePrinterChange = this.handlePrinterChange.bind(this);
    this.handleFilamentChange = this.handleFilamentChange.bind(this);
    this.handleTimeToPrintChange = this.handleTimeToPrintChange.bind(this);
    this.handlePrintSpeedChange = this.handleTimeToPrintChange.bind(this);
    this.handleSupportChange = this.handleSupportChange.bind(this);
    this.handleLayerHeightChange = this.handleLayerHeightChange.bind(this);
    this.handleWallThicknessChange = this.handleWallThicknessChange.bind(this);
    this.handleAdditonalDetailsChange = this.handleAdditonalDetailsChange.bind(this);
    this.handleSearchTagsChange = this.handleSearchTagsChange.bind(this);
    this.state = {
      description: '',
      title: '',
      printer: '',
      totalFilamentUsed: 0,
      timeToPrint: 0,
      printSpeed: 0,
      supports: null,
      layerHeight: 0,
      wallThickness: 0,
      additionalDetails: '',
      searchTags: '',
      objectFiles: null,
      imageUrl: null
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData()
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handlePrinterChange(event) {
    this.setState({ printer: event.target.value });
  }

  handleFilamentChange(event) {
    this.setState({ totalFilamentUsed: event.target.value });
  }

  handleTimeToPrintChange(event) {
    this.setState({ timeToPrint: event.target.value });
  }

  handlePrintSpeedChange(event) {
    this.setState({ printSpeed: event.target.value });
  }

  handleSupportChange(event) {
    this.setState({ support: event.target.value });
  }

  handleLayerHeightChange(event) {
    this.setState({ layerHeight: event.target.value });
  }

  handleWallThicknessChange(event) {
    this.setState({ wallThickness: event.target.value });
  }

  handleAdditonalDetailsChange(event) {
    this.setState({ additionalDetails: event.target.value });
  }

  handleSearchTagsChange(event) {
    this.setState({ additionalDetails: event.target.value });
  }

  render() {
    return (
    <div className = "container-fluid col-10 pb-3">
      <h1 className = "catamaran text-shadow mt-3">Create Entry</h1>
      <form className='row bg-white px-5 mb-3 pt-4 rounded-3 shadow'>
        <div className='col-12 col-md-6'>
        <div className="form-group">
          <label htmlFor="formFile" className="form-label cairo">Upload Image</label>
            <input className="form-control mb-2" type="file" id="formFile" ></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="title" className="cairo">Title</label>
          <input type="title" className="form-control text-center" id="title" value={this.state.title} onChange={this.handleTitleChange}></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description" className='cairo'>Description</label>
          <textarea className="form-control" id="description" rows="4" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
        </div>
          <div className="form-group mb-2">
          <label htmlFor="printer" className='cairo'>Printer</label>
            <input type="printer" className="form-control text-center" id="printer" value={this.state.printer} onChange={this.handlePrinterChange}></input>
        </div>
          <div className="form-group position-relative mb-2">
          <label htmlFor="filamentUsed" className='cairo'>Total Filament Used</label>
            <input type="filamentUsed" className="form-control text-center" id="filamentUsed" value={this.state.totalFilamentUsed} onChange={this.handleFilamentChange}></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">Grams</span>
        </div>
          <div className="form-group row justify-content-between cairo mb-2">
            <label htmlFor="filament" className="cairo">Time to Print</label>
          <span className='col-6 cairo'>
              <input type="hours" className="form-control col-6 cairo" id="hours" placeholder="Hours" ></input>
          </span>
          <span className='col-6 cairo'>
              <input type="hours" className="form-control cairo" id="minutes" placeholder="Minutes" ></input>
          </span>
       </div>
          <div className="form-group mb-2 position-relative">
            <label htmlFor="printSpeed" className='cairo'>Print Speed</label>
            <input type="printSpeed" className="form-control text-center" id="printSpeed" value={this.state.printSpeed} onChange={this.handlePrintSpeedChange}></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm/s</span>
        </div>
        </div>
        <div className='col-12 col-md-6'>
        <label htmlFor="supports" className='mb-2 cairo'>Supports</label>
        <select type="supports" className="form-select cairo mb-2" aria-label="Default select example">
          <option selected>Were supports used?</option>
            <option value={this.state.support} onChange={this.handleSupportChange}>Yes</option>
          <option value={this.state.support} onChange={this.handleSupportChange}>No</option>
        </select>
        <div className="form-group position-relative">
            <label htmlFor="layerHeight" className='cairo'>Layer Height</label>
            <input type="layerHeight" className="form-control mb-2 text-center" id="layerHeight" value={this.state.layerHeight} onChange={this.handleLayerHeightChange}></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm</span>
        </div>
        <div className="form-group position-relative">
          <label htmlFor="wallThickness" className='cairo'>Wall Thickness</label>
            <input type="wallThickness" className="form-control mb-2 text-center" id="wallThickness" value={this.state.wallThickness} onChange= {this.handleWallThicknessChange}></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm</span>
        </div>
        <div className="form-group">
          <label htmlFor="description" className='cairo'>Additional Details</label>
          <textarea className="form-control mb-2" id="description" rows="4" placeholder='Enter any additional details' value={this.state.additionalDetails} onChange={this.handleAdditonalDetailsChange}></textarea>
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
}
