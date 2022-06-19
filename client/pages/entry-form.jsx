import React from 'react';
import Loading from './loading';

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePrinterChange = this.handlePrinterChange.bind(this);
    this.handleFilamentChange = this.handleFilamentChange.bind(this);
    this.handleHoursToPrintChange = this.handleHoursToPrintChange.bind(this);
    this.handleMinutesToPrintChange = this.handleMinutesToPrintChange.bind(this);
    this.handlePrintSpeedChange = this.handlePrintSpeedChange.bind(this);
    this.handleSupportChange = this.handleSupportChange.bind(this);
    this.handleLayerHeightChange = this.handleLayerHeightChange.bind(this);
    this.handleWallThicknessChange = this.handleWallThicknessChange.bind(this);
    this.handleAdditonalDetailsChange = this.handleAdditonalDetailsChange.bind(this);
    this.handleSearchTagsChange = this.handleSearchTagsChange.bind(this);
    this.imageInputRef = React.createRef();
    this.objectFilesRef = React.createRef();
    this.state = {
      isLoading: false,
      description: '',
      title: '',
      printer: '',
      totalFilamentUsed: '',
      hoursToPrint: '',
      minutesToPrint: '',
      printSpeed: '',
      supports: '',
      layerHeight: '',
      wallThickness: '',
      additionalDetails: '',
      searchTags: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    const formData = new FormData();
    formData.append('description', this.state.description);
    formData.append('title', this.state.title);
    formData.append('printer', this.state.printer);
    formData.append('totalFilamentUsed', this.state.totalFilamentUsed);
    formData.append('printSpeed', this.state.printSpeed);
    formData.append('supports', this.state.supports);
    formData.append('layerHeight', this.state.layerHeight);
    formData.append('wallThickness', this.state.wallThickness);
    formData.append('additionalDetails', this.state.additionalDetails);
    formData.append('searchTags', this.state.searchTags);
    formData.append('image', this.imageInputRef.current.files[0]);
    const tagsArr = this.state.searchTags.split(' ');
    if (this.state.hoursToPrint.length < 2) {
      this.setState({ hoursToPrint: '0' + this.state.hoursToPrint });
    }
    if (this.state.minutesToPrint.length < 2) {
      this.setState({ minutesToPrint: '0' + this.state.minutesToPrint });
    }
    formData.append('timeToPrint', this.state.hoursToPrint + this.state.minutesToPrint);
    for (let i = 0; i < this.objectFilesRef.current.files.length; i++) {
      formData.append('objects', this.objectFilesRef.current.files[i]);
    }
    for (let i = 0; i < tagsArr.length; i++) {
      formData.append('tags', tagsArr[i]);
    }
    const userId = this.props.userId;
    formData.append('userId', userId);
    return fetch('api/uploads', {
      method: 'POST',
      headers: {
        'X-Access-Token': `${window.localStorage.getItem('react-jwt')}`
      },
      body: formData
    }).then(res => res.json())
      .then(response => {
        this.setState({
          isLoading: false,
          description: '',
          title: '',
          printer: '',
          totalFilamentUsed: '',
          hoursToPrint: '',
          minutesToPrint: '',
          printSpeed: '',
          supports: '',
          layerHeight: '',
          wallThickness: '',
          additionalDetails: '',
          searchTags: ''
        });
        window.location.hash = 'search';
      })
      .catch(err => console.error(err));
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

  handleHoursToPrintChange(event) {
    this.setState({ hoursToPrint: event.target.value });
  }

  handleMinutesToPrintChange(event) {
    this.setState({ minutesToPrint: event.target.value });
  }

  handlePrintSpeedChange(event) {
    this.setState({ printSpeed: event.target.value });
  }

  handleSupportChange(event) {
    this.setState({ supports: event.target.value });
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
    this.setState({ searchTags: event.target.value.toLowerCase() });
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <Loading />
      );
    }
    return (
    <div className = "container-fluid col-10 pb-3">
      <h1 className = "catamaran text-shadow mt-3">Create Entry</h1>
      <form className='row bg-white px-3 px-md-5 mb-3 pt-4 rounded-3 shadow' onSubmit={this.handleSubmit}>
        <div className='col-12 col-md-6'>
        <div className="form-group">
              <label htmlFor="formFile" className="form-label mb-1 cairo">Upload Image</label>
              <input className="form-control mb-2" type="file" id="formFile" ref={this.imageInputRef} accept=".png, .jpg, .jpeg, .gif" required></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="title" className="cairo">Title</label>
              <input type="title" className="form-control text-center" id="title" value={this.state.title} onChange={this.handleTitleChange} required></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description" className='cairo'>Description</label>
              <textarea className="form-control" id="description" rows="4" value={this.state.description} onChange={this.handleDescriptionChange} required></textarea>
        </div>
          <div className="form-group mb-2">
          <label htmlFor="printer" className='cairo'>Printer</label>
              <input type="printer" className="form-control text-center" id="printer" value={this.state.printer} onChange={this.handlePrinterChange} required></input>
        </div>
          <div className="form-group position-relative mb-2">
          <label htmlFor="filamentUsed" className='cairo'>Total Filament Used</label>
              <input type="filamentUsed" className="form-control text-center" id="filamentUsed" value={this.state.totalFilamentUsed} onChange={this.handleFilamentChange} required></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">Grams</span>
        </div>
          <div className="form-group row justify-content-between cairo mb-2">
            <label htmlFor="filament" className="cairo">Time to Print</label>
          <span className='col-6 cairo'>
                <input type="hours" className="form-control col-6 cairo text-center" id="hours" placeholder="Hours" value={this.state.hoursToPrint} onChange={this.handleHoursToPrintChange} required></input>
          </span>
          <span className='col-6 cairo'>
                <input type="hours" className="form-control cairo text-center" id="minutes" placeholder="Minutes" value={this.state.minutesToPrint} onChange={this.handleMinutesToPrintChange} required></input>
          </span>
       </div>
          <div className="form-group mb-2 position-relative">
            <label htmlFor="printSpeed" className='cairo'>Print Speed</label>
              <input type="printSpeed" className="form-control text-center" id="printSpeed" value={this.state.printSpeed} onChange={this.handlePrintSpeedChange} required></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm/s</span>
        </div>
        </div>
        <div className='col-12 col-md-6'>
        <label htmlFor="supports" className='mb-1 cairo'>Supports</label>
            <select type="supports" className="form-select cairo mb-2" aria-label="Default select example" value={this.state.supports} onChange={this.handleSupportChange} required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <div className="form-group position-relative">
            <label htmlFor="layerHeight" className='cairo'>Layer Height</label>
              <input type="layerHeight" className="form-control mb-2 text-center" id="layerHeight" value={this.state.layerHeight} onChange={this.handleLayerHeightChange} required></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm</span>
        </div>
        <div className="form-group position-relative">
          <label htmlFor="wallThickness" className='cairo'>Wall Thickness</label>
              <input type="wallThickness" className="form-control mb-2 text-center" id="wallThickness" value={this.state.wallThickness} onChange={this.handleWallThicknessChange} required></input>
            <span className="position-absolute top-50 end-0 me-3 mt-2 pe-none text-muted">mm</span>
        </div>
        <div className="form-group">
          <label htmlFor="description" className='cairo'>Additional Details</label>
              <textarea className="form-control mb-2" id="description" rows="4" placeholder='Enter any additional details' value={this.state.additionalDetails} onChange={this.handleAdditonalDetailsChange} required></textarea>
        </div>
        <div className="mb-2">
            <label htmlFor="objectFiles" className="cairo">Object File(s)</label>
              <input className="form-control" type="file" id="objectFiles" multiple ref={this.objectFilesRef} required></input>
        </div>
          <div className="form-group mb-2">
            <label htmlFor="searchTags" className='cairo'>Search Tags</label>
              <textarea className="form-control" id="searchTags" rows="4" placeholder='Enter tags so others can find your print! eg(plant nature outdoors)' value={this.state.searchTags} onChange={this.handleSearchTagsChange} required></textarea>
          </div>
        </div>
        <div className="container-fluid justify-content-center col-12 mt-3 mb-5">
            <button type="submit" className="bg-orange btn btn-lg p-3  btn-outline-secondary text-light col-12 cairo shadow">Save</button>
        </div>
      </form>
   </div>
    );
  }
}
