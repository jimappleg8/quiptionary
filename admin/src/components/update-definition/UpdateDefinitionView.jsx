import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const UpdateDefinitionView = (props) => {
  
  const definition = props.definition;
  const handleInputChange = props.handleInputChange;
  const handleUpdateDefinition = props.handleUpdateDefinition;
  
  return (
    <div>
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
      
        <Button variant="success" onClick={handleUpdateDefinition}>
          Update Definition
        </Button>
      </Form>
    </div>
  );
}

export default UpdateDefinitionView;
