import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <Router>
    <div>
      <h1>Greeting</h1>

      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

export default App;
