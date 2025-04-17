import React, { useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import Favicon from './components/Favicon/Favicon';
import './App.css';

function App() {
  // Set body class to 'loaded' to trigger animations after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
    
    // Set document title
    document.title = 'Lucaverse - Enter the Void';
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="App font-inter text-gray-200">
      <Favicon />
      <BackgroundCanvas />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;