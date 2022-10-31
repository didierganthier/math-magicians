import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Math from './pages/Math';
import NotMatch from './pages/NotMatch';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        exact
        path="/"
        element={(
          <Home />
        )}
      />
      <Route path="/maths" element={<Math />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </>
);

export default App;
