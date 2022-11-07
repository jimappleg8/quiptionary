import React  from 'react';
import CreateSourceView from './CreateSourceView';

const CreateSourceLogic = (props) => {

  const source = props.source; 
  const onSourceInputChange = props.onSourceInputChange;
  const onCreateSource = props.onCreateSource;
  const onSourceModalOpenClose = props.onSourceModalOpenClose;

  const handleSourceModalOpenClose = async (open) => {
    await onSourceModalOpenClose(open)
      .catch((err) => console.error(err));
  }
  
  const handleSourceInputChange = async (sourceId, event) => {
    await onSourceInputChange(sourceId, event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleCreateSource = async (data) => {
    await onCreateSource(data)
      //.then(() => )
      .catch((err) => console.error(err));
  }

  return (
    <CreateSourceView 
      source={source}
      handleSourceInputChange={handleSourceInputChange}
      handleCreateSource={handleCreateSource}
      handleSourceModalOpenClose={handleSourceModalOpenClose}
    />
  )

}

export default CreateSourceLogic;