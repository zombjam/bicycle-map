import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Road, Travel } from './pages';
import { Header } from './components';
import './assets/scss/style.scss';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route path="/road" element={<Road />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
