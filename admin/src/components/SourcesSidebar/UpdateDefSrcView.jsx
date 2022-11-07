import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'

const UpdateDefSrcView = (props) => {
  
  const source = props.source;
  const defSource = props.defSource;
  const handleSourcesInputChange = props.handleSourcesInputChange;
  const handleDefSrcInputChange = props.handleDefSrcInputChange;
  const handleUpdateSource = props.handleUpdateSource;
  const handleUnlinkSource = props.handleUnlinkSource;
  const handleModalOpenClose = props.handleModalOpenClose;
  
  const srcDate = (source.publishedDate != '') ? ' ' + source.publishedDate + '.' : '';
  const alsoCites = (defSource.citedSource != '') ? '<br>&nbsp;<br><b>Which cites:</b> ' + defSource.citedSource : '';
  const header = source.description + ' (' + source.id + ')<br>' + source.author + '.' + srcDate + alsoCites;
  
  return (
    <Accordion.Item eventKey="{source.id}" className="mt-2">
      <Accordion.Header><span dangerouslySetInnerHTML={{__html: header}}></span></Accordion.Header>
      <Accordion.Body>
      <div id={'displaySource-' + source.id} style={{display: "block"}}>
        <Table striped bordered size="sm">
          <tbody>
              <tr>
                <th>Source ID:</th>
                <td>{source.id}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td><span dangerouslySetInnerHTML={{__html: source.description}}></span></td>
              </tr>
              <tr>
                <th>Author:</th>
                <td>{source.author}</td>
              </tr>
              <tr>
                <th>Published Date:</th>
                <td>{source.publishedDate}</td>
              </tr>
              <tr>
                <th>Citation:</th>
                <td><span dangerouslySetInnerHTML={{__html: source.citation}}></span></td>
              </tr>
              <tr>
                <th>Notes:</th>
                <td>{source.notes}</td>
              </tr>
          </tbody>
        </Table>
        <h4>Definition-specific information</h4>
        <Table striped bordered size="sm">
          <tbody>
              <tr>
                <th>Details:</th>
                <td>{defSource.details}</td>
              </tr>
              <tr>
                <th>Attributed To:</th>
                <td>{defSource.attributedTo}</td>
              </tr>
              <tr>
                <th>Cited Source:</th>
                <td><span dangerouslySetInnerHTML={{__html: defSource.citedSource}}></span></td>
              </tr>
              <tr>
                <th>Is Primary:</th>
                <td>{(defSource.isPrimary == 0) ? 'false' : 'true'}</td>
              </tr>
          </tbody>
        </Table>
        <Button
          variant="success"
          onClick={() => handleModalOpenClose(source.id, true)}
        >
          Edit
        </Button>
        &nbsp;
        <Button
          variant="danger"
          onClick={() => handleUnlinkSource(source.id)}
        >
          Unlink
        </Button>
      </div>
      </Accordion.Body>

      <Modal id={'displayModal-' + source.id} show={source.modal} onHide={() => handleModalOpenClose(source.id, false)}>
        <Modal.Header closebutton="true">
          <Modal.Title>Edit Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="sourceDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={source.description}
                onChange={(e) => handleSourcesInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourceAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={source.author}
                onChange={(e) => handleSourcesInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourcePublishedDate">
              <Form.Label>Published Date</Form.Label>
              <Form.Control
                type="text"
                name="publishedDate"
                value={source.publishedDate}
                onChange={(e) => handleSourcesInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourceCitation">
              <Form.Label>Citation</Form.Label>
              <Form.Control
                as="textarea"
                name="citation"
                value={source.citation}
                onChange={(e) => handleSourcesInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourceNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                value={source.notes}
                onChange={(e) => handleSourcesInputChange(source.id, e)}
              />
            </Form.Group>
            
            <h4>Definition-specific information</h4>
    
            <Form.Group className="mb-3" controlId="defSrcDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                name="details"
                value={defSource.details}
                onChange={(e) => handleDefSrcInputChange(source.id, e)}
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="defSrcAttributedTo">
              <Form.Label>Attributed To</Form.Label>
              <Form.Control
                type="text"
                name="defSrcAttributedTo"
                value={defSource.attributedTo}
                onChange={(e) => handleDefSrcInputChange(source.id, e)}
              />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="defSrcCitedSource">
              <Form.Label>Cited Source</Form.Label>
              <Form.Control
                as="textarea"
                name="citedSource"
                value={defSource.citedSource}
                onChange={(e) => handleDefSrcInputChange(source.id, e)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="defSrcIsPrimary">
              <Form.Label>Is Primary</Form.Label>
              <Form.Control
                type="text"
                name="isPrimary"
                value={defSource.isPrimary}
                onChange={(e) => handleDefSrcInputChange(source.id, e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => handleUpdateSource(source.id)}
          >
            Save
          </Button>
          &nbsp;
          <Button
            variant="warning"
            onClick={() => handleModalOpenClose(source.id, false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </Accordion.Item>
  );
}

export default UpdateDefSrcView;
