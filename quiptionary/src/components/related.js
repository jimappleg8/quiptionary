import React from 'react'

const Related = (props) => {
  const { definition } = props;
  
  const plural = (definition.plural === 'Y') ? 'pl. ' : ''
  
  return (
    <div>
      <p><strong>{definition.entryWord}</strong>&nbsp;&nbsp;<i>{plural}{definition.partOfSpeech}</i>&nbsp;&nbsp;{definition.definition} <i>&mdash; {definition.attributedTo}</i></p>
    </div>
  )
}

export default Related