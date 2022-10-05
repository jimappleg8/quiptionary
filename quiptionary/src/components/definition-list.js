import React from 'react'
import Matches from './matches'
import Related from './related'

const DefinitionList = ({ results }) => {
  console.log(results)
  let words = '';
  let matches = [];
  let related = [];
  if (results.data) {
    words = results.data.words || '';
    matches = results.data.matches || [];
    related = results.data.related || [];
    related = related.sort((a, b) => {
      return a.entry_word.localeCompare(b.entry_word, undefined, {sensitivity: 'base'});
    });
  }
  //console.log(matches)
  //console.log(related)
  return (
    <div className="result">
      <h2>{words}</h2>
      {(matches.length === 0) ? <p>No results found.</p> : ''}
      {matches.map((item, i) => (
        <Matches key={item.id} definition={item} count={i} />
      ))}
      {(related.length !== 0) ? <hr /> : ''}
      {(related.length !== 0) ? <h3>Related</h3> : ''}
      {related.map((item) => (
        <Related key={item.id} definition={item} />
      ))}
    </div>
  )
}

export default DefinitionList