
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Components/pages/indexPage.jsx';
import LoginPage from './Components/pages/login'
import Layout from './Components/Layout';
import Register from './Components/pages/register';
import { AccountPage } from './Components/pages/accountPage.jsx';
import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';       // to check wheather user is logged in or not


axios.defaults.baseURL = 'http://localhost:4000';     //backend url
axios.defaults.withCredentials = true;    //to set the cookies

function App() {
  return (
    <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account/:subpage?" element={<AccountPage />} />
            <Route path="/account/:subpage/:action" element={<AccountPage />} />
          </Route>
        </Routes>
    </UserContextProvider>

  );
}

export default App;
