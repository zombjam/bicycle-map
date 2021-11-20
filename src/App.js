import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Road, Travel } from './pages';
import { Header } from './components';
import { Box } from '@chakra-ui/react';

import './assets/scss/style.scss';

function App() {
  return (
    <HashRouter>
      <Box display="flex" flexDirection="column" w="full" h="full">
        <Header />
        <Box flex="1" position="relative">
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route path="/road" element={<Road />}></Route>
            <Route path="/travel" element={<Travel />}></Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Box>
      </Box>
    </HashRouter>
  );
}

export default App;
