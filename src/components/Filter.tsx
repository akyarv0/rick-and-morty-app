import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;
//     if (value === 'all' && checked) {
//       setSelectedFilters([]);
//       onFilterChange([]);
//     } else if (value === 'all' && !checked) {
//       setSelectedFilters([]);
//       onFilterChange([]);
//     } else {
//       if (checked) {
//         setSelectedFilters([...selectedFilters, value]);
//       } else {
//         setSelectedFilters(selectedFilters.filter(filter => filter !== value));
//       }
//       onFilterChange(selectedFilters);
//     }
//   };

const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (value === 'all' && checked) {
      setSelectedFilters([]);
      onFilterChange([]);
    } else if (value === 'all' && !checked) {
      setSelectedFilters([]);
      onFilterChange([]);
    } else {
      let newSelectedFilters = [...selectedFilters];
      if (checked) {
        newSelectedFilters = [...newSelectedFilters, value];
      } else {
        newSelectedFilters = newSelectedFilters.filter(filter => filter !== value);
      }
      setSelectedFilters(newSelectedFilters);
      onFilterChange(newSelectedFilters); 
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded mb-4">
      <label className="block mb-2">Filter by Status:</label>
      <div className="flex flex-col">
        <label className="inline-flex items-center mr-4 ">
          <input
            type="checkbox"
            className="form-checkbox"
            name="status"
            value="all"
            checked={selectedFilters.length === 0}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">All</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            className="form-checkbox"
            name="status"
            value="Alive"
            checked={selectedFilters.includes('Alive')}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Alive</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            className="form-checkbox"
            name="status"
            value="Dead"
            checked={selectedFilters.includes('Dead')}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Dead</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            name="status"
            value="unknown"
            checked={selectedFilters.includes('unknown')}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Unknown</span>
        </label>
      </div>
    </div>
  );
}

export default Filter;
