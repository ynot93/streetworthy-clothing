import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import QuestionnairePage from './pages/QuestionnairePage';

const App = () => (
  <Router>
    <div classname="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
