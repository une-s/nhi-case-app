import React from 'react';
import Header from './common/components/Header';
import Footer from './common/components/Footer';
import Home from './pages/home';
import Details from './pages/details';
import NotFound from './pages/not-found';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<Details />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
