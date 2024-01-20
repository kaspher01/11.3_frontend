import React from 'react';

const CountryFilter = ({ countrySearchTerm,  onSearch, onCountryChange}) => {
    return (
        <div>
          <input
            type="text"
            placeholder="Search for meals by country..."
            value={countrySearchTerm}
            onChange={onCountryChange}
          />
          <button onClick={onSearch}>Search by country</button>
        </div>
      );
};

export default CountryFilter;