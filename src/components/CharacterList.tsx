import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Character } from '../Character';
import Filter from './Filter';

interface FilterCriteria {
  species: string[];
  status: string[];
  gender: string[];

}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FilterCriteria>({ species: [], status: [], gender: [] });

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

  useEffect(() => {
    const applyFilters = () => {
      const filtered = characters.filter(character =>
        Object.entries(filters).every(([key, values]) =>
          values.length ? values.includes(character[key]) : true
        )
      );
      setFilteredCharacters(filtered);
    };

    applyFilters();
  }, [filters, characters]);

  const handleFilterChange = (filterCategory: string, selectedFilters: string[]) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterCategory]: selectedFilters }));
  };

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