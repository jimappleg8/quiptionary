import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'

const UpdateDefSrcView = ({ source, defSource, handleSourceInputChange, handleDefSrcInputChange, handleUpdateSource }) => {
  
  const handleEditSource = (sourceId, toggle) => {
    if (toggle === 'form') {
      document.getElementById('displaySource-' + sourceId).style.display = 'none';
      document.getElementById('displayForm-' + sourceId).style.display = 'block';
    } else {
      document.getElementById('displaySource-' + sourceId).style.display = 'block';
      document.getElementById('displayForm-' + sourceId).style.display = 'none';      
    }
  }
  
  const handleClose = (sourceId) => {
    document.getElementById('displayModal-' + sourceId).style.display = 'none'; 
  }
  
  const handleOpen = (sourceId) => {
    document.getElementById('displayModal-' + sourceId).style.display = '';
  }

  return (
    <div>
      <hr/>
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
                <td>{source.citation}</td>
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
                <td>{defSource.citedSource}</td>
              </tr>
              <tr>
                <th>Is Primary:</th>
                <td>{(defSource.isPrimary == 0) ? 'false' : 'true'}</td>
              </tr>
          </tbody>
        </Table>
        <Button
          variant="success"
          data-bs-toggle="modal"
          data-bs-target={'#displayModal-' + source.id}
        >
          Edit
        </Button>
       </div>

      <Modal id={'displayModal-' + source.id} show="{true}" onHide="">
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
                onChange={(e) => handleSourceInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourceAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={source.author}
                onChange={(e) => handleSourceInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourcePublishedDate">
              <Form.Label>Published Date</Form.Label>
              <Form.Control
                type="text"
                name="publishedDate"
                value={source.publishedDate}
                onChange={(e) => handleSourceInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourceCitation">
              <Form.Label>Citation</Form.Label>
              <Form.Control
                type="text"
                name="citation"
                value={source.citation}
                onChange={(e) => handleSourceInputChange(source.id, e)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="sourceNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                type="text"
                name="notes"
                value={source.notes}
                onChange={(e) => handleSourceInputChange(source.id, e)}
              />
            </Form.Group>
            
            <h4>Definition-specific information</h4>
    
            <Form.Group className="mb-3" controlId="defSrcDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="text"
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
                type="text"
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
              data-bs-dismiss="modal"
              data-bs-target={'#displayModal-' + source.id}
            >
              Cancel
            </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default UpdateDefSrcView;
