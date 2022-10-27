import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import UpdateDefinitionLogic from './UpdateDefinitionLogic';


const UpdateDefinitionApi = () => {
  let params = useParams();
    
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
  
  const initialSourcesState = [{
    id: null,
    description: "",
    author: "",
    publishedDate: "",
    citation: "",
    notes: "",
  }]
  const [sources, setSources] = useState(initialSourcesState);

  const initialDefinitionSourcesState = [{
    definitionId: null,
    sourceId: null,
    details: "",
    attributedTo: "",
    citedSource: "",
    isPrimary: 0
  }]
  const [defSources, setDefSources] = useState(initialDefinitionSourcesState);


  const onInputChange = async (event) => {
    const { name, value } = event.target;
    setDefinition({ ...definition, [name]: value });
  };
  
  const onSourceInputChange = async (sourceId, event) => {
    const { name, value } = event.target;
    setSources(sources => 
      sources.map(obj => {
        if (obj.id === sourceId) {
          return { ...obj, [name]: value };
        }
        return obj;
      }),
    );  
  };
  
  const onDefSrcInputChange = async (sourceId, event) => {
    const { name, value } = event.target;
    const newName = (name == 'defSrcAttributedTo') ? 'attributedTo' : name;
    setDefSources(defSources =>
      defSources.map(obj => {
        if (obj.sourceId === sourceId) {
          return { ...obj, [newName]: value }
        }
        return obj;
      }),
    );
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

    await api.updateDef(params.id, payload)
      .then(response => {
      window.alert(`Definition updated successfully`)
      setDefinition({
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
  
  const onUpdateSource = async (sourceId) => {
    sources.map(async (obj, i) => {
      if (obj.id === sourceId) {

        const payload = {
          description: obj.description,
          author: obj.author,
          publishedDate: obj.publishedDate,
          citation: obj.citation,
          notes: obj.notes
        };
    
        await api.updateSrc(obj.id, payload)
          .then(response => {
            console.log('Source updated successfully');
            setSources(sources => 
              sources.map(src => {
                if (src.id === sourceId) {
                  return {
                    description: response.data.description,
                    author: response.data.author,
                    publishedDate: response.data.publishedDate,
                    citation: response.data.citation,
                    notes: response.data.notes
                  };
                }
                return src;
              }),
            );  
        });
        
        const payload2 = {
          details: defSources[i].details,
          attributedTo: defSources[i].attributedTo,
          citedSource: defSources[i].citedSource,
          isPrimary: defSources[i].isPrimary
        };

        await api.updateDefSrc(defSources[i].definitionId, defSources[i].sourceId, payload2)
          .then(response => {
            console.log('Definition Source updated successfully');
            setDefSources(defSources => 
              defSources.map(src => {
                if (src.id === sourceId) {
                  return {
                    details: response.data.details,
                    attributedTo: response.data.attributedTo,
                    citedSource: response.data.citedSource,
                    isPrimary: response.data.isPrimary
                  };
                }
                return src;
              }),
            );  
        });
        
      }
    })
  }

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        let response = await api.getDef(params.id)
      
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
          const mySources = [];
          const myDefSources = []
          for (let i = 0; i < response.data.sources.length; i++) {
            mySources.push({
              id: response.data.sources[i].id,
              description: response.data.sources[i].description,
              author: response.data.sources[i].author,
              publishedDate: response.data.sources[i].publishedDate,
              citation: response.data.sources[i].citation,
              notes: response.data.sources[i].notes,
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
          alert(response.data.error)
        }
      }
      catch(err) {
        alert(err)
      }
    }
    
    fetchDefinition()
      .catch(console.error);
  }, [params.id]);
  

  return (
    <UpdateDefinitionLogic 
      definition={definition}
      sources={sources}
      defSources={defSources}
      onInputChange={onInputChange}
      onSourceInputChange={onSourceInputChange}
      onDefSrcInputChange={onDefSrcInputChange}
      onUpdateDefinition={onUpdateDefinition}
      onUpdateSource={onUpdateSource}
    />
  )
}

export default UpdateDefinitionApi