import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateDefinitionApi from '../components/update-definition/UpdateDefinitionApi';
import SourcesSidebarApi from '../components/SourcesSidebar/SourcesSidebarApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UpdateDefinition = () => {

  let params = useParams();
  
  const definitionId = params.id;
  
  return (
    <Container>
      <Row>
        <Col xs="7">
          <h2>Update Definition</h2>
          <hr/>
          <UpdateDefinitionApi definitionId={definitionId} />
        </Col>
        <Col xs="5">
          <h2>Sources</h2>
          <hr/>
          <SourcesSidebarApi definitionId={definitionId} />
        </Col>
      </Row>
    </Container>
  )
}

export default UpdateDefinition
