import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EntryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {}
    };
  }

  componentDidMount(props) {
    fetch(`/api/entries/${Number(this.props.entryId)}`)
      .then(res => res.json())
      .then(entry => {
        this.setState({ entry });
      });
  }

  render(props) {
    const { title, description, imageUrl, printer, totalFilamentUsed, timeToPrint, printSpeed, supports, layerHeight, wallThickness, additionalDetails } = this.state.entry;
    return (
      <div className='row justify-content-center m-0'>
        <div className=" bg-white row col-10 rounded mt-3 mb-3">
          <div className='justify-space-between'>
            <h3>{title}</h3>
          </div>
          <img src={imageUrl} className='col-md-6 display-img rounded'></img>
          <div className='col-md-6 p-0'>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className='bg-gray'>
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                  <div className='col-11 '>
                    {description}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
          <div className='col-md-6 p-0'>
            <Accordion >
              <Accordion.Item eventKey="1" className='bg-gray'>
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body className='p-2'>
                  <div className='col-12 bg-white row rounded m-0 p-2'>
                    <div className='col-md-6 p-0'>
                      <p className='m-0 cairo-bold'>Printer: <span className='cairo'>{printer}</span></p>
                      <p className='m-0 cairo-bold'>Filament Used: <span className='cairo'>{totalFilamentUsed} g</span></p>
                      <p className='m-0 cairo-bold'>Print Time: <span className='cairo'>{timeToPrint} hours minutes</span></p>
                      <p className='m-0 cairo-bold'>Print Speed: <span className='cairo'>{printSpeed} mm/s</span></p>
                    </div>
                    <div className='col-md-6 p-0'>
                      <p className='m-0 cairo-bold'>Supports: <span className='cairo'>{supports}</span></p>
                      <p className='m-0 cairo-bold'>Layer Height: <span className='cairo'>{layerHeight} mm</span></p>
                      <p className='m-0 cairo-bold'>Wall Thickness: <span className='cairo'>{wallThickness} mm</span></p>
                    </div>
                  </div>
                  <div className='col-12 bg-white row rounded m-0 mt-2 p-1 ps-0'>
                    <p className='m-0 cairo-bold'>Additional Details: <p className='cairo'>{additionalDetails}</p></p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
