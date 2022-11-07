import React from 'react';
import Header from './common/components/Header';
import Footer from './common/components/Footer';
import Home from './pages/home';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
