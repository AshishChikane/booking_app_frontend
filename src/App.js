
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import IndexPage from './Components/pages/indexPage.jsx';
import LoginPage from './Components/pages/login'
import Layout from './Components/Layout';
import Register from './Components/pages/register';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}> 
      <Route index  element={<IndexPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>

  );
}

export default App;
