import React  from 'react';
import UpdateDefinitionView from './UpdateDefinitionView';
import UpdateDefSrcView from './UpdateDefSrcView';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UpdateDefinitionLogic = ({ definition, sources, defSources, onInputChange, onSourceInputChange, onDefSrcInputChange, onUpdateDefinition, onUpdateSource }) => {
  
  const handleInputChange = async event => {
    await onInputChange(event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleSourceInputChange = async (sourceId, event) => {
    await onSourceInputChange(sourceId, event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleDefSrcInputChange = async (sourceId, event) => {
    await onDefSrcInputChange(sourceId, event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleUpdateDefinition = async (data) => {
    await onUpdateDefinition(data)
      //.then(() => )
      .catch((err) => console.error(err));
  }

  const handleUpdateSource = async (sourceId) => {
    await onUpdateSource(sourceId)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  //console.log(sources);
  
  // construct the source list to insert into the JSX
  const sourceList = [];
  for (let i = 0; i < sources.length; i++) {
    sourceList.push(
      <UpdateDefSrcView
        source={sources[i]}
        defSource= {defSources[i]}
        handleSourceInputChange={handleSourceInputChange}
        handleDefSrcInputChange={handleDefSrcInputChange}
        handleUpdateSource={handleUpdateSource}
        key={i}
      />
    )
  }
  
  return (
    <Container>
      <Row>
        <Col xs="8">
          <h2>Update Definition</h2>
          <hr/>
          <UpdateDefinitionView 
            definition={definition}
            handleInputChange={handleInputChange}
            handleUpdateDefinition={handleUpdateDefinition}
          />
        </Col>
        <Col xs="4">
          <h2>Sources</h2>
          {sourceList}
        </Col>
      </Row>
    </Container>

  )
}

export default UpdateDefinitionLogic;