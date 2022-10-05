import React from 'react'

const Related = (props) => {
  const { definition } = props;
  
  const plural = (definition.plural === 'Y') ? 'pl. ' : ''
  
  return (
    <div>
      <p><strong>{definition.entry_word}</strong>&nbsp;&nbsp;<i>{plural}{definition.part_of_speech}</i>&nbsp;&nbsp;{definition.definition} <i>&mdash; {definition.author}</i></p>
    </div>
  )
}

export default Related