import React from 'react';
import CharacterList from './components/CharacterList';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">The Rick and Morty API</h1>
      </header>
      <main className="container mx-auto px-4">
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
