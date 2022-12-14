import React, { useState } from 'react'

const SearchBar = (props) => {
  const { onSearch } = props;
  
  const [searchText, setSearchText] = useState('')
  
  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }
  
  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText.toLowerCase())
    }
  }
  
  return (
    <div>
      <div className="control">
        <input className="input is-medium" onChange={handleInput} onKeyPress={handleEnterKeyPressed} type="text" value={searchText} placeholder="Enter a word" />
      </div>
    </div>
  )
}

export default SearchBar