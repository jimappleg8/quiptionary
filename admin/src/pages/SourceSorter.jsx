import React, { useState, useEffect } from 'react';
import api from '../api';
import DefinitionBlock from '../components/SourceSorter/DefinitionBlock';
import SourceBlock from '../components/SourceSorter/SourceBlock';
import SorterButtons from '../components/SourceSorter/SorterButtons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SourceSorter = () => {
  
  const [definitionId, setDefinitionId] = useState(null);
  
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

  // define state for an array of source records (used with defSources array)
  const initialSourcesState = [{
    id: null,
    description: "",
    author: "",
    publishedDate: "",
    citation: "",
    notes: "",
    modal: false
  }]
  const [sources, setSources] = useState(initialSourcesState);

  // define state for an array of definitionSources records (used with sources array)
  const initialDefinitionSourcesState = [{
    definitionId: null,
    sourceId: null,
    details: "",
    attributedTo: "",
    citedSource: "",
    isPrimary: 0
  }]
  const [defSources, setDefSources] = useState(initialDefinitionSourcesState);

  
  const handleMoveDescription = async (sourceId) => {
    
    setDefSources(defSources =>
      defSources.map(async (obj) => {
        if (obj.sourceId === sourceId) {
          const payload = {
            details: obj.details,
            attributedTo: obj.attributedTo,
            citedSource: definition.source_description,
            isPrimary: obj.isPrimary
          }
          await api.updateDefSrc(obj.definitionId, obj.sourceId, payload)
            .catch(console.error);
          return { ...obj, ['citedSource']: definition.source_description }
        }
        return obj;
      }),
    );
    
    setDefinition({ ...definition, ['source_description']: '' });
    const payload2 = {
      entryWord: definition.entryWord,
      partOfSpeech: definition.partOfSpeech,
      plural: definition.plural,
      definition: definition.definition,
      originalQuote: definition.originalQuote,
      attributedTo: definition.attributedTo,
      source_id: definition.source_id,
      source_date: definition.source_date,
      source_description: '',
      other_sources: definition.other_sources,
      definitionType: definition.definitionType,
      keywords: definition.keywords,
      categories: definition.categories,
      source: definition.source,
      context: definition.context,
      game: definition.game
    };
    await api.updateDef(definitionId, payload2)
      .catch(console.error);
    
  }

  const handleDeleteDescription = async () => {
    setDefinition({ ...definition, ['source_description']: '' });
    
    const payload = {
      entryWord: definition.entryWord,
      partOfSpeech: definition.partOfSpeech,
      plural: definition.plural,
      definition: definition.definition,
      originalQuote: definition.originalQuote,
      attributedTo: definition.attributedTo,
      source_id: definition.source_id,
      source_date: definition.source_date,
      source_description: '',
      other_sources: definition.other_sources,
      definitionType: definition.definitionType,
      keywords: definition.keywords,
      categories: definition.categories,
      source: definition.source,
      context: definition.context,
      game: definition.game
    };
    await api.updateDef(definitionId, payload)
      .catch(console.error);
  }
  
  const getNextDefinition = async () => {
    let response = await api.getOneDef();
    if (response.request.statusText === "OK") {
      setDefinitionId(response.data.id);
    }
  }
  
  const handleNext = () => {
    getNextDefinition();
  }
  
  useEffect(() => {
      getNextDefinition();
  }, []);
  
  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        let response = await api.getDef(definitionId)
      
        if (response.request.statusText === "OK") {
          setDefinition(
            {
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
              definitionType: response.data.definitionType,
              keywords: response.data.keywords,
              categories: response.data.categories,
              source: response.data.source,
              context: response.data.context,
              game: response.data.game
            }
          );
          const mySources = [];
          const myDefSources = [];
          for (let i = 0; i < response.data.sources.length; i++) {
            mySources.push({
              id: response.data.sources[i].id,
              description: response.data.sources[i].description,
              author: response.data.sources[i].author,
              publishedDate: response.data.sources[i].publishedDate,
              citation: response.data.sources[i].citation,
              notes: response.data.sources[i].notes,
              modal: ''
            });
            myDefSources.push({
              definitionId: response.data.sources[i].definitionSource.definitionId,
              sourceId: response.data.sources[i].definitionSource.sourceId,
              details: response.data.sources[i].definitionSource.details,
              attributedTo: response.data.sources[i].definitionSource.attributedTo,
              citedSource: response.data.sources[i].definitionSource.citedSource,
              isPrimary: response.data.sources[i].definitionSource.isPrimary,
            });
          };
          setSources(mySources);
          setDefSources(myDefSources);
        }
        else if(response.request.statusText === "Error") {
          console.log("alert 1: " + response.data.error);
        }
      }
      catch(err) {
        console.log("alert 2: " + err);
      }
    }
    
    if (definitionId != null) {
      fetchDefinition()
        .catch(console.error);
    }
  }, [definitionId, definition, defSources]);


  // construct the source list to insert into the JSX
  const sourceList = [];
  for (let i = 0; i < sources.length; i++) {
    sourceList.push(
      <SourceBlock
        source={sources[i]}
        defSource= {defSources[i]}
        key={sources[i].id}
      />
    );
  }
  
  return (
    <Container>
      <Row>
        <Col xs="6">
          <h2>Source Sorter</h2>
          <hr/>
          <DefinitionBlock
            definition={definition}
          />
        </Col>
        <Col xs="6">
          <h2>Sources</h2>
          <hr/>
          {sourceList}
        </Col>
      </Row>
      <Row>
        <Col xs="2"></Col>
        <Col xs="8">
          <SorterButtons
            source={sources[0]}
            handleMoveDescription={handleMoveDescription} 
            handleDeleteDescription={handleDeleteDescription}
            handleNext={handleNext}
          />
        </Col>
        <Col xs="2"></Col>
      </Row>
    </Container>

  )
}

export default SourceSorter;