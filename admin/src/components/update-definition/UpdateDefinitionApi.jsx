import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import UpdateDefinitionLogic from './UpdateDefinitionLogic';


const UpdateDefinitionApi = (props) => {

  const definitionId = props.definitionId;
  
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

  const onInputChange = async (event) => {
    const { name, value } = event.target;
    setDefinition({ ...definition, [name]: value });
  };
    
  const onUpdateDefinition = async () => {
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

    await api.updateDef(definitionId, payload)
      .then(response => {
      window.alert(`Definition updated successfully`)
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
        definitionType: response.data.definitionType,
        keywords: response.data.keywords,
        categories: response.data.categories,
        source: response.data.source,
        context: response.data.context,
        game: response.data.game
      });
    })
  }

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        let response = await api.getDef(definitionId)
      
        if (response.request.statusText === "OK") {
          setDefinition(
            {
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
        }
        else if(response.request.statusText === "Error") {
          console.log("alert 1: " + response.data.error);
        }
      }
      catch(err) {
        console.log("alert 2: " + err);
      }
    }
    
    fetchDefinition()
      .catch(console.error);
  }, [definitionId]);
  

  return (
    <UpdateDefinitionLogic 
      definition={definition}
      onInputChange={onInputChange}
      onUpdateDefinition={onUpdateDefinition}
    />
  )
}

export default UpdateDefinitionApi