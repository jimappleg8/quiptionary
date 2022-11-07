import React  from 'react';
import UpdateDefinitionView from './UpdateDefinitionView';


const UpdateDefinitionLogic = (props) => {
  
  const definition = props.definition;
  const onInputChange = props.onInputChange;
  const onUpdateDefinition = props.onUpdateDefinition;

  const handleInputChange = async event => {
    await onInputChange(event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
    
  const handleUpdateDefinition = async (data) => {
    await onUpdateDefinition(data)
      //.then(() => )
      .catch((err) => console.error(err));
  }

  return (
    <UpdateDefinitionView 
      definition={definition}
      handleInputChange={handleInputChange}
      handleUpdateDefinition={handleUpdateDefinition}
    />
  )
}

export default UpdateDefinitionLogic;