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
    const printTime = String(timeToPrint);
    const hours = printTime[0] + printTime[1];
    const minutes = printTime[2] + printTime[3];
    return (
      <div className='row justify-content-center m-0'>
        <div className="bg-white row col-10 rounded my-3 shadow">
          <div className=' mb-2 mt-3'>
            <span className='m-0 cairo-bold f-36'>{title}</span>
          </div>
          <div className='px-4 pt-2 col-md-6 mb-md-3'>
            <div className='row justify-content-center'>
            <img src={imageUrl} className='display-img img-div'></img>
            </div>
          </div>
          <div className='col-md-6 p-2 mb-md-3'>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className='bg-gray border-0 shadow'>
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                  <div className='col-11 f-13 cairo'>
                    {description}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
          <div className='col-md-6 p-2 mb-md-3'>
            <Accordion >
              <Accordion.Item eventKey="1" className='bg-gray border-0 shadow'>
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body className='p-2'>
                  <div className='col-12 bg-white row rounded m-0 p-2'>
                    <div className='col-md-6 p-0 detail'>
                      <p className='m-0 cairo-bold f-13'>Printer: <span className='cairo f-13'>{printer}</span></p>
                      <p className='m-0 cairo-bold f-13'>Filament Used: <span className='cairo f-13'>{totalFilamentUsed} g</span></p>
                      <p className='m-0 cairo-bold f-13'>Print Time: <span className='cairo f-13'>{hours} hours {minutes} minutes</span></p>
                      <p className='m-0 cairo-bold f-13'>Print Speed: <span className='cairo f-13'>{printSpeed} mm/s</span></p>
                    </div>
                    <div className='col-md-6 p-0'>
                      <p className='m-0 cairo-bold f-13'>Supports: <span className='cairo f-13'>{supports}</span></p>
                      <p className='m-0 cairo-bold f-13'>Layer Height: <span className='cairo f-13'>{layerHeight} mm</span></p>
                      <p className='m-0 cairo-bold f-13'>Wall Thickness: <span className='cairo f-13'>{wallThickness} mm</span></p>
                    </div>
                  </div>
                  <div className='col-12 bg-white row rounded m-0 mt-2 p-1 ps-0'>
                    <div className='m-0 cairo-bold f-13'>Additional Details: <div className='cairo f-13'>{additionalDetails}</div></div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className='col-md-6 p-2 none'>
            <Accordion >
              <Accordion.Item eventKey="1" className='bg-gray border-0'>
                <Accordion.Header>files</Accordion.Header>
                <Accordion.Body className='p-2'>
                  <div className='col-12 bg-white row rounded m-0 p-2'>
                    <p>files placeholder</p>
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