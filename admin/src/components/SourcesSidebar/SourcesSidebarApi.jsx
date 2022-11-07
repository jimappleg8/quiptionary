import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import UpdateDefSrcLogic from './UpdateDefSrcLogic';
import AssignSourceLogic from './AssignSourceLogic';
import CreateSourceLogic from './CreateSourceLogic';


const SourcesSidebarApi = (props) => {

  const definitionId = props.definitionId;
  
  // define state for a single source record (used by Create)
  const initialSourceState = {
    id: null,
    description: "",
    author: "",
    publishedDate: "",
    citation: "",
    notes: "",
    modal: false
  }
  const [source, setSource] = useState(initialSourceState);

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

  // define state for a single definitionSource record (used by Assign)
  const initialDefinitionSourceState = {
    definitionId: definitionId,
    sourceId: "",
    details: "",
    attributedTo: "",
    citedSource: "",
    isPrimary: 0,
    modal: false
  }
  const [defSource, setDefSource] = useState(initialDefinitionSourceState);
  
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


  // open and close a specific edit source modal
  const onModalOpenClose = async (sourceId, open) => {
    setSources(sources => 
      sources.map(obj => {
        if (obj.id === sourceId) {
          return { ...obj, ['modal']: open };
        }
        return obj;
      }),
    );  
  }
  
  // open and close the Assign modal
  const onAssignModalOpenClose = async (open) => {
    setDefSource({ ...defSource, ['modal']: open });
  }

  // open and close the Create Source modal
  const onSourceModalOpenClose = async (open) => {
    setSource({ ...source, ['modal']: open });
  }


  // handle input for a single definitionSource record (used with Assign)
  const onInputChange = async (event) => {
    const { name, value } = event.target;
    setDefSource({ ...defSource, [name]: value });
  };
  
  // handle input for a single source record (used with Create Source)
  const onSourceInputChange = async (event) => {
    const { name, value } = event.target;
    setSource({ ...source, [name]: value });
  };
  
  // handle input for a specific source record in a list
  const onSourcesInputChange = async (sourceId, event) => {
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
  
  // handle input for a specific definitionSource record in a list
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

  // create a new definitionSource record as part of Assign
  const onCreateDefSrc = async () => {
    const payload = {
      definitionId: defSource.definitionId,
      sourceId: defSource.sourceId,
      details: defSource.details,
      attributedTo: defSource.attributedTo,
      citedSource: defSource.citedSource,
      isPrimary: defSource.isPrimary
    };
    console.log(payload);

    await api.createDefSrc(payload)
      .then(response => {
        setDefSource({
          definitionId: response.data.definitionId,
          sourceId: response.data.sourceId,
          details: response.data.details,
          attributedTo: response.data.attributedTo,
          citedSource: response.data.citedSource,
          isPrimary: response.data.isPrimary,
          modal: defSource.modal
        });
        onAssignModalOpenClose(false);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // create a new source record and assign it to this definition
  const onCreateSource = async () => {
    const payload = {
      description: source.description,
      author: source.author,
      publishedDate: source.publishedDate,
      citation: source.citation,
      notes: source.notes
    };

    await api.createSrc(payload)
      .then(async (response) => {
        setSource({
          id: response.data.id,
          description: response.data.description,
          author: response.data.author,
          publishedDate: response.data.publishedDate,
          citation: response.data.citation,
          notes: response.data.notes,
          modal: source.modal
        });
        
        const payload2 = {
          definitionId: definitionId,
          sourceId: response.data.id,
          details: "",
          attributedTo: "",
          citedSource: "",
          isPrimary: 0,
        };
        console.log(payload2);
    
        await api.createDefSrc(payload2)
          .then(response => {
            setDefSource({
              definitionId: response.data.definitionId,
              sourceId: response.data.sourceId,
              details: response.data.details,
              attributedTo: response.data.attributedTo,
              citedSource: response.data.citedSource,
              isPrimary: response.data.isPrimary,
              modal: defSource.modal
            });
            onSourceModalOpenClose(false);
          })
          .catch(e => {
            console.log(e);
          });
        
      })
      .catch(e => {
        console.log(e);
      });

  }

  // update a pair of source/definitionSource records
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
            setSources(sources => 
              sources.map(src => {
                if (src.id === sourceId) {
                  return {
                    id: src.id,
                    description: response.data.description,
                    author: response.data.author,
                    publishedDate: response.data.publishedDate,
                    citation: response.data.citation,
                    notes: response.data.notes,
                    modal: src.modal
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
            setDefSources(defSources => 
              defSources.map(src => {
                if (src.id === sourceId) {
                  return {
                    definitionId: src.definitionId,
                    sourceId: src.sourceId,
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
        onModalOpenClose(obj.id, false);
      }
    })
  }
  
  const onUnlinkSource = async (sourceId) => {
    if (
      window.confirm(
        `Do you want to unlink the source ${sourceId} permanently?`,
      )
    ) {
     await api.deleteDefSrc(definitionId, sourceId);
      window.location.reload();
    }
  }

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        let response = await api.getDef(definitionId)
      
        if (response.request.statusText === "OK") {
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
    
    fetchDefinition()
      .catch(console.error);
  }, [definitionId, defSource]);
  

  return (
    <div>
      <UpdateDefSrcLogic 
        sources={sources}
        defSources={defSources}
        onSourcesInputChange={onSourcesInputChange}
        onDefSrcInputChange={onDefSrcInputChange}
        onUpdateSource={onUpdateSource}
        onUnlinkSource={onUnlinkSource}
        onModalOpenClose={onModalOpenClose}
      />
      <AssignSourceLogic 
        defSource={defSource}
        onInputChange={onInputChange}
        onCreateDefSrc={onCreateDefSrc}
        onAssignModalOpenClose={onAssignModalOpenClose}
      />
      <CreateSourceLogic 
        source={source}
        onSourceInputChange={onSourceInputChange}
        onCreateSource={onCreateSource}
        onSourceModalOpenClose={onSourceModalOpenClose}
      />
    </div>
  )
}

export default SourcesSidebarApi