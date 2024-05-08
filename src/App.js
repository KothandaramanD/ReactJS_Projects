import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter directly
import './Components/Body.css';
import './App.css'; // Importing the app.css stylesheet
import ProductDetailsPage from './Components/ProductDetailsPage';
import App1 from './App1';

const App = () => {

 return (
  <Router>
       <Routes>
        <Route path="*" element={<App1 />} />
        </Routes>
  </Router>
);
};

export default App;
