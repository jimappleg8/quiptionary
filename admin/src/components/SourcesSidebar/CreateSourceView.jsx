import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'

const CreateSourceView = (props) => {
  
  const source = props.source;
  const handleSourceInputChange = props.handleSourceInputChange;
  const handleCreateSource = props.handleCreateSource;
  const handleSourceModalOpenClose = props.handleSourceModalOpenClose;
  
  return (
    <div>
      <hr/>
      <Button
        variant="success"
        onClick={() => handleSourceModalOpenClose(true)}
      >
        New Source
      </Button>
      <Modal id="displayModal" show={source.modal} onHide={() => handleSourceModalOpenClose(false)}>
        <Modal.Header closebutton="true">
          <Modal.Title>Create Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="sourceDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={source.description}
                onChange={handleSourceInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sourceAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={source.author}
                onChange={handleSourceInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sourcePublishedDate">
              <Form.Label>Published Date</Form.Label>
              <Form.Control
                type="text"
                name="publishedDate"
                value={source.publishedDate}
                onChange={handleSourceInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sourceCitation">
              <Form.Label>Citation</Form.Label>
              <Form.Control
                as="textarea"
                name="citation"
                value={source.citation}
                onChange={handleSourceInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sourceNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                value={source.notes}
                onChange={handleSourceInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleCreateSource}
          >
            Create Source
          </Button>
          &nbsp;
          <Button
            variant="warning"
            onClick={() => handleSourceModalOpenClose(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateSourceView;
