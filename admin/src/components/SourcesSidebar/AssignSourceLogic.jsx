import React  from 'react';
import AssignSourceView from './AssignSourceView';


const AssignSourceLogic = (props) => {
  
  const defSource = props.defSource;
  const onInputChange = props.onInputChange;
  const onCreateDefSrc = props.onCreateDefSrc;
  const onAssignModalOpenClose = props.onAssignModalOpenClose;

  const handleModalOpenClose = async (open) => {
    await onAssignModalOpenClose(open)
      .catch((err) => console.error(err));
  }
  
  const handleInputChange = async event => {
    await onInputChange(event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
    
  const handleCreateDefSrc = async (data) => {
    await onCreateDefSrc(data)
      //.then(() => )
      .catch((err) => console.error(err));
  }

  return (
    <AssignSourceView 
      defSource={defSource}
      handleInputChange={handleInputChange}
      handleCreateDefSrc={handleCreateDefSrc}
      handleModalOpenClose={handleModalOpenClose}
    />
  )
}

export default AssignSourceLogic;