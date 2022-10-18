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
    entry_word: "",
    part_of_speech: "",
    plural: 0,
    definition: "",
    original_quote: "",
    author: "",
    verified: 0,
    source_id: "",
    source_date: "",
    source_description: "",
    other_sources: "",
    definition_type: "",
    keywords: "",
    categories: "",
    source: "",
    context: "",
    sort: "",
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
      entry_word: definition.entry_word,
      part_of_speech: definition.part_of_speech,
      plural: definition.plural,
      definition: definition.definition,
      original_quote: definition.original_quote,
      author: definition.author,
      verified: definition.verified,
      source_id: definition.source_id,
      source_date: definition.source_date,
      source_description: definition.source_description,
      other_sources: definition.other_sources,
      definition_type: definition.definition_type,
      keywords: definition.keywords,
      categories: definition.categories,
      source: definition.source,
      context: definition.context,
      sort: definition.sort,
      game: definition.game
    };

    await api.insert(payload)
      .then(response => {
        setDefinition({
          entry_word: response.data.entry_word,
          part_of_speech: response.data.part_of_speech,
          plural: response.data.plural,
          definition: response.data.definition,
          original_quote: response.data.original_quote,
          author: response.data.author,
          verified: response.data.verified,
          source_id: response.data.source_id,
          source_date: response.data.source_date,
          source_description: response.data.source_description,
          other_sources: response.data.other_sources,
          definition_type: response.data.definition_type,
          keywords: response.data.keywords,
          categories: response.data.categories,
          source: response.data.source,
          context: response.data.context,
          sort: response.data.sort,
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
                  name="entry_word"
                  value={definition.entry_word}
                  onChange={handleInputChange}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formPartOfSpeech">
                <Form.Label>Part of Speech</Form.Label>
                <Form.Control
                  type="text"
                  name="part_of_speech"
                  value={definition.part_of_speech}
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
                  name="original_quote"
                  value={definition.original_quote}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={definition.author}
                  onChange={handleInputChange}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formVerified">
                <Form.Label>Verified</Form.Label>
                <Form.Control
                  type="text"
                  name="verified"
                  value={definition.verified}
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
                  name="definition_type" 
                  value={definition.definition_type}
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
              
              <Form.Group className="mb-3" controlId="formSort">
                <Form.Label>Sort String</Form.Label>
                <Form.Control
                  type="text"
                  name="sort"
                  value={definition.sort}
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
