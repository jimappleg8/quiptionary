import React, { useState } from 'react'
import DefinitionList from './components/definition-list'
import SearchBar from './components/search-bar'
import './stylesheets/main.sass'
import './stylesheets/bulma.sass';
import DefinitionSource from './api/definition-source'

function App() {
  const [state, setState] = useState({
    results: []
  });
  
  const onSearch = async(text) => {
    const url = '/definitions/search/' + encodeURIComponent(text);

    const results = await DefinitionSource.get(url)
    setState(prevState => {
      return{...prevState, results: results}
    })
  }
  
  return (
    <div className="App">
      <div className="container searchApp">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered">
              Quiptionary Search
            </h2>
            <SearchBar onSearch={onSearch} />
            <DefinitionList results={state.results} />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
