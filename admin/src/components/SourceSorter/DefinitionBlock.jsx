import React from "react";
import { Link } from 'react-router-dom';

const DefinitionBlock = (props) => {
  
  const definition = props.definition;
    
  return (
    <div>
      <p><b>Definition ID:</b> {definition.id} (<Link to={`/definitions/update/${definition.id}`}>edit</Link>)</p>
      <h4>{definition.entryWord}</h4>
      <p>{definition.definition}
      <br/>— {definition.attributedTo}</p>
      <p><b>Source Description:</b>
      <br/>{(definition.source_description) ? definition.source_description : '(none)'}</p>
      <p><b>Source Notes:</b>
      <br/>{(definition.source) ? definition.source : '(none)'}</p>
    </div>
  );
}

export default DefinitionBlock;