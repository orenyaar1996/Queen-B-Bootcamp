import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CreateNewMentor from './pages/signup-page';
import HomePage from './pages/homepage';
import Login from './pages/Login';
import firstPerson from './images/person1.svg';
import './App.css';

const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  // Fetch data from the backend API
  // useEffect(() => {
  //   axios.get(`http://localhost:${port}/api/helloworld`)
  //     .then(response => setMessage(response.data))
  //     .catch(error => console.error(`There was an error retrieving the message: ${error}`));
  // }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route 
            path="/" 
            element={<HomePage message={message} firstPerson={firstPerson} />} 
          />
          {/* Sign-Up Page Route */}
          <Route path="/signup" element={<CreateNewMentor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
