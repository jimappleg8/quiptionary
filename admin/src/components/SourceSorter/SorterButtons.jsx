import React from 'react';
import Button from 'react-bootstrap/Button';

const SorterButtons = (props) => {
  
  const source = props.source;
  const handleMoveDescription = props.handleMoveDescription;
  const handleDeleteDescription = props.handleDeleteDescription;
  const handleNext = props.handleNext;

  return (
    <div>
      <hr/>
      <Button
        style={{width:"100%"}}
        variant="success"
        onClick={() => handleMoveDescription(source.id)}
      >
        Move Description to defSource &mdash;&gt;
      </Button>
      <p></p>
      <Button
        style={{width:"100%"}}
        variant="danger"
        onClick={handleDeleteDescription}
      >
        Delete Description
      </Button>
      <p></p>
      <Button
        variant="warning"
        onClick={handleNext}
      >
        NEXT
      </Button>

    </div>
  )
}

export default SorterButtons;