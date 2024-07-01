import React from 'react';
import { Character } from '../Character';

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-95 text-white p-4 rounded overflow-auto z-10">
      <div className="text-right">
        <button className="text-white text-xl">&times;</button>
      </div>
      <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
   
     
    
    </div>
  );
}

export default CharacterDetails;
