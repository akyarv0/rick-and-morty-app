import React from "react";

interface FilterProps {
  onFilterChange: (filterCategory: string, filters: string[]) => void;
}

const categories = {
  status: ["Alive", "Dead", "unknown"],
  gender: ["Male", "Female", "unknown"],
  species: ["Human", "Alien", "unknown"],
};

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    const { value, checked } = e.target;
    onFilterChange(category, checked ? [value] : []);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded mb-4 flex flex-col gap-y-2">
      {Object.entries(categories).map(([category, options]) => (
        <div key={category} className="mb-4">
          <label className="block mb-2">
            Filter by {category.charAt(0).toUpperCase() + category.slice(1)}:
          </label>
          <div className="flex flex-wrap">
            {options.map((option) => (
              <label key={option} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name={category}
                  value={option}
                  onChange={(e) => handleCheckboxChange(e, category)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
