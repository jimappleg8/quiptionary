import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

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
    <Container>
      <Form.Control 
        type="text" 
        className="input is-medium"
        onChange={handleInput}
        onKeyPress={handleEnterKeyPressed}
        value={searchText}
        autoFocus={true}
        placeholder="Enter a word"
      />
    </Container>
  )
}

export default SearchBar