import React  from 'react';
import UpdateDefSrcView from './UpdateDefSrcView';
import Accordion from 'react-bootstrap/Accordion';


const UpdateDefSrcLogic = (props) => {
  
  const sources = props.sources;
  const defSources = props.defSources;
  const onSourcesInputChange = props.onSourcesInputChange;
  const onDefSrcInputChange = props.onDefSrcInputChange;
  const onUpdateSource = props.onUpdateSource;
  const onUnlinkSource = props.onUnlinkSource;
  const onModalOpenClose = props.onModalOpenClose;


  const handleModalOpenClose = async (sourceId, open) => {
    await onModalOpenClose(sourceId, open)
      .catch((err) => console.error(err));
  }
  
  const handleSourcesInputChange = async (sourceId, event) => {
    await onSourcesInputChange(sourceId, event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleDefSrcInputChange = async (sourceId, event) => {
    await onDefSrcInputChange(sourceId, event)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleUpdateSource = async (sourceId) => {
    await onUpdateSource(sourceId)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  const handleUnlinkSource = async (sourceId) => {
    await onUnlinkSource(sourceId)
      //.then(() => )
      .catch((err) => console.error(err));
  }
  
  //console.log(sources);
  
  // construct the source list to insert into the JSX
  const primaryList = [];
  const sourceList = [];
  for (let i = 0; i < sources.length; i++) {
    if (defSources[i].isPrimary === true) {
      primaryList.push(
        <Accordion key={i.toString()}>
          <UpdateDefSrcView
            source={sources[i]}
            defSource= {defSources[i]}
            handleSourcesInputChange={handleSourcesInputChange}
            handleDefSrcInputChange={handleDefSrcInputChange}
            handleUpdateSource={handleUpdateSource}
            handleUnlinkSource={handleUnlinkSource}
            handleModalOpenClose={handleModalOpenClose}
          />
        </Accordion>
      );
    } else {
      sourceList.push(
        <Accordion key={i.toString()}>
          <UpdateDefSrcView
            source={sources[i]}
            defSource= {defSources[i]}
            handleSourcesInputChange={handleSourcesInputChange}
            handleDefSrcInputChange={handleDefSrcInputChange}
            handleUpdateSource={handleUpdateSource}
            handleUnlinkSource={handleUnlinkSource}
            handleModalOpenClose={handleModalOpenClose}
          />
        </Accordion>
      );
    }
  }
  
  return (
    <div>
      <h5 className="mt-4">Primary Source</h5>
      {primaryList}
      <h5 className="mt-4">Other Sources</h5>
      {sourceList}
    </div>

  )
}

export default UpdateDefSrcLogic;