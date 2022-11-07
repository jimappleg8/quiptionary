import React, { useState } from 'react'
import api from '../api'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const DefinitionInsert = () => {
  const initialDefinitionState = {
    id: null,
    entryWord: "",
    partOfSpeech: "",
    plural: 0,
    definition: "",
    originalQuote: "",
    attributedTo: "",
    source_id: "",
    source_date: "",
    source_description: "",
    other_sources: "",
    definitionType: "",
    keywords: "",
    categories: "",
    source: "",
    context: "",
    game: ""
  };
  const [definition, setDefinition] = useState(initialDefinitionState);
  const [submitted, setSubmitted] = useState(false);


  const handleInputChange = async event => {
    const { name, value } = event.target;
    setDefinition({ ...definition, [name]: value });
    console.log(definition);
  };
  

  const saveDefinition = async () => {
    const payload = {
      entryWord: definition.entryWord,
      partOfSpeech: definition.partOfSpeech,
      plural: definition.plural,
      definition: definition.definition,
      originalQuote: definition.originalQuote,
      attributedTo: definition.attributedTo,
      source_id: definition.source_id,
      source_date: definition.source_date,
      source_description: definition.source_description,
      other_sources: definition.other_sources,
      definitionType: definition.definitionType,
      keywords: definition.keywords,
      categories: definition.categories,
      source: definition.source,
      context: definition.context,
      game: definition.game
    };

    await api.insertDef(payload)
      .then(response => {
        setDefinition({
          id: response.data.id,
          entryWord: response.data.entryWord,
          partOfSpeech: response.data.partOfSpeech,
          plural: response.data.plural,
          definition: response.data.definition,
          originalQuote: response.data.originalQuote,
          attributedTo: response.data.attributedTo,
          source_id: response.data.source_id,
          source_date: response.data.source_date,
          source_description: response.data.source_description,
          other_sources: response.data.other_sources,
          definitionType: response.data.definition_type,
          keywords: response.data.keywords,
          categories: response.data.categories,
          source: response.data.source,
          context: response.data.context,
          game: response.data.game
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newDefinition = () => {
    setDefinition(initialDefinitionState);
    setSubmitted(false);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs="6">
          <h1>New Definition</h1>
          {submitted ? (
            <Form>
              <h4>You submitted successfully!</h4>
              <Button variant="success" onClick={newDefinition}>
                Add
              </Button>
            </Form>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="formEntryWord">
                <Form.Label>Entry Word</Form.Label>
                <Form.Control
                  type="text"
                  name="entryWord"
                  value={definition.entryWord}
                  onChange={handleInputChange}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formPartOfSpeech">
                <Form.Label>Part of Speech</Form.Label>
                <Form.Control
                  type="text"
                  name="partOfSpeech"
                  value={definition.partOfSpeech}
                  onChange={handleInputChange}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formPlural">
                <Form.Label>Plural</Form.Label>
                <Form.Control
                  type="text"
                  name="plural"
                  value={definition.plural}
                  onChange={handleInputChange}
                />
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="formDefinition">
                <Form.Label>Definition</Form.Label>
                <Form.Control
                  as="textarea"
                  name="definition"
                  value={definition.definition}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formOriginalQuote">
                <Form.Label>Original Quote</Form.Label>
                <Form.Control
                  as="textarea"
                  name="originalQuote"
                  value={definition.originalQuote}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formAttributedTo">
                <Form.Label>Attributed To</Form.Label>
                <Form.Control
                  type="text"
                  name="attributedTo"
                  value={definition.attributedTo}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSourceId">
                <Form.Label>Source ID</Form.Label>
                <Form.Control
                  type="text"
                  name="source_id"
                  value={definition.source_id}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSourceDate">
                <Form.Label>Source Date</Form.Label>
                <Form.Control
                  type="text"
                  name="source_date"
                  value={definition.source_date}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSourceDescription">
                <Form.Label>Source Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="source_description"
                  value={definition.source_description}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formOtherSources">
                <Form.Label>Other Sources</Form.Label>
                <Form.Control
                  type="text"
                  name="other_sources"
                  value={definition.other_sources}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formDefinitionType">
                <Form.Label>Definition Type</Form.Label>
                <Form.Control
                  type="text"
                  name="definitionType" 
                  value={definition.definitionType}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control
                  type="text"
                  name="keywords"
                  value={definition.keywords}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formCategories">
                <Form.Label>Categories</Form.Label>
                <Form.Control
                  type="text"
                  name="categories"
                  value={definition.categories}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSource">
                <Form.Label>Source Notes</Form.Label>
                <Form.Control
                  type="text"
                  name="source"
                  value={definition.source}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formContext">
                <Form.Label>Context</Form.Label>
                <Form.Control
                  type="text"
                  name="context"
                  value={definition.context}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formGame">
                <Form.Label>Game</Form.Label>
                <Form.Control
                  type="text"
                  name="game"
                  value={definition.game}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Button variant="success" onClick={saveDefinition}>
                Add Definition
              </Button>
            </Form>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default DefinitionInsert;
