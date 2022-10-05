import React from 'react'

const Matches = (props) => {
  const { definition, count } = props;
  
  const plural = (definition.plural === 'Y') ? 'pl. ' : ''
  
  return (
    <div>
      <dd><strong>{count + 1}.</strong>&nbsp;&nbsp;<i>{plural}{definition.part_of_speech}</i>&nbsp;&nbsp;{definition.definition} <i>&mdash;{definition.author}</i></dd>
    </div>
  )
}

export default Matches