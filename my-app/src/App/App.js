import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavBar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import UserDetails from '../components/UserDetail/UserDetails';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
