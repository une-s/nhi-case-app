import React from 'react';
import Header from './common/components/Header';
import Footer from './common/components/Footer';
import Home from './pages/home';
import Details from './pages/details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
