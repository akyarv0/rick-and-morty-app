import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Character } from '../Character';
import Filter from './Filter';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (selectedFilters: string[]) => {
    setFilters(selectedFilters);
  };

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredCharacters(characters);
    } else if (filters.includes('all')) {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(characters.filter(character => filters.includes(character.status)));
    }
  }, [filters, characters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className="flex flex-wrap justify-center w-3/4">
        {filteredCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
