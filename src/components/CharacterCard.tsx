import React, { useState } from 'react';
import { Character } from '../Character';
import CharacterDetails from './CharacterDetails';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative max-w-full md:max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-800 text-white flex flex-col md:flex-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full md:w-40 object-cover" src={character.image} alt={character.name} />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{character.name}</div>
          <div className={`text-sm mb-2 ${character.status === 'Alive' ? 'text-green-500' : 'text-red-500'}`}>
            {character.status} - {character.species}
          </div>
        </div>
        <div>
          <p className="text-gray-400">Last known location:</p>
          <p className="text-white">{character.location.name}</p>
          <p className="text-gray-400 mt-2">First seen in:</p>
          <p className="text-white">Look Who's Purging Now</p>
        </div>
      </div>
      {isHovered && <CharacterDetails character={character} />}
    </div>
  );
}

export default CharacterCard;
