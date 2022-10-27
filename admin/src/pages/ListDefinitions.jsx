import React, { useState } from 'react'
import api from '../api'
import { DefinitionList } from '../components'
import { SearchBar } from '../components'

const ListDefinitions = () => {
  const [state, setState] = useState({
    results: []
  });
  
  const onSearch = async(text) => {
    const results = await api.searchDef(encodeURIComponent(text));
    setState(prevState => {
      return{...prevState, results: results};
    })
  }

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <DefinitionList results={state.results} />
    </div>
  )
}

export default ListDefinitions