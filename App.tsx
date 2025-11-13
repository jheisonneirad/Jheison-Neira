
import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';

const App: React.FC = () => {

  const navigateHome = () => {
    // In a more complex app, this might use a router.
    // For now, it can just scroll to the top.
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onLogoClick={navigateHome} />
      <main className="container mx-auto px-4 py-8">
        <HomePage />
      </main>
    </div>
  );
};

export default App;