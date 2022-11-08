import React from 'react';
import Header from './common/components/header';
import Footer from './common/components/footer';
import Home from './pages/home';
import Details from './pages/details';
import NotFound from './pages/not-found';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<Details />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
