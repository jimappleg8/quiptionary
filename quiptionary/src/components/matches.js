import React from 'react'

const Matches = (props) => {
  const { definition, count } = props;
  
  const plural = (definition.plural === 'Y') ? 'pl. ' : ''
  
  return (
    <div>
      <dd><strong>{count + 1}.</strong>&nbsp;&nbsp;<i>{plural}{definition.partOfSpeech}</i>&nbsp;&nbsp;{definition.definition} <i>&mdash;{definition.attributedTo}</i></dd>
    </div>
  )
}

export default Matches