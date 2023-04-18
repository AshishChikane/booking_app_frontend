
import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import IndexPage from './Components/pages/indexPage.jsx';
import LoginPage from './Components/pages/login'
import Layout from './Components/Layout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}> 
      <Route index  element={<IndexPage />} />
      <Route path="/login" element={<LoginPage/>} />
      </Route>
    </Routes>

  );
}

export default App;
