import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components';
import { ListDefinitions, CreateDefinition } from './pages';
import UpdateDefinitionApi from './pages/update-definition/UpdateDefinitionApi';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListDefinitions/>} />
        <Route path="/definitions/list" element={<ListDefinitions/>} />
        <Route path="/definitions/create" element={<CreateDefinition/>} />
        <Route path="/definitions/update/:id" exact element={<UpdateDefinitionApi/>} />
      </Routes>
    </Router>
  );
}

export default App;
