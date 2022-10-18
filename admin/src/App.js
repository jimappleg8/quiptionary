import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components'
import { ListDefinitions, CreateDefinition, UpdateDefinition } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListDefinitions/>} />
        <Route path="/definitions/list" element={<ListDefinitions/>} />
        <Route path="/definitions/create" element={<CreateDefinition/>} />
        <Route path="/definitions/update/:id" exact element={<UpdateDefinition/>} />
      </Routes>
    </Router>
  );
}

export default App;
