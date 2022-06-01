import React from 'react';
import MainNavbar from './pages/navBar';
import EntryForm from './pages/entryForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {

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
      <div className='bg-gray'>
    <MainNavbar />
    <EntryForm />
    </div>
    );
  }
}
