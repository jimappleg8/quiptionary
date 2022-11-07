import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

const AssignSourceView = (props) => {
  
  const defSource = props.defSource
  const handleInputChange = props.handleInputChange;
  const handleCreateDefSrc = props.handleCreateDefSrc;
  const handleModalOpenClose = props.handleModalOpenClose;
  
  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      handleCreateDefSrc();
    }
  }

  
  return (
    <div>
      <hr/>
      <Button
        variant="success"
        onClick={() => handleModalOpenClose(true)}
      >
        Assign a Source
      </Button>
      <Modal id="displayModal" show={defSource.modal} onHide={() => handleModalOpenClose(false)}>
        <Modal.Header closebutton="true">
          <Modal.Title>Assign Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="assignSourceId">
              <Form.Label>Source ID</Form.Label>
              <Form.Control
                type="text"
                name="sourceId"
                value={defSource.sourceId}
                autoFocus={true}
                onKeyPress={handleEnterKeyPressed}
                onChange={handleInputChange}
              />
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleCreateDefSrc}
          >
            Assign Source
          </Button>
          &nbsp;
          <Button
            variant="warning"
            onClick={() => handleModalOpenClose(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AssignSourceView;
