import React, { useState, useEffect } from 'react';
import './style.css';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';
import CountrySearchBar from './components/CountryFilter';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [countrySearchTerm, setCountrySearchTerm] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/search.php?s=`)
      .then(response => response.json())
      .then(data => setMeals(data.meals || []));
  }, []);

  const handleSearch = () => {
    fetch(`${API_URL}/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => setMeals(data.meals || []));
  };

  const handleCountrySearch = () => {
    fetch(`${API_URL}/filter.php?a=${countrySearchTerm}`)
      .then(response => response.json())
      .then(data => setMeals(data.meals || []));
  };

  const handleMealClick = mealId => {
    fetch(`${API_URL}/lookup.php?i=${mealId}`)
      .then(response => response.json())
      .then(data => setSelectedMeal(data.meals[0]));
  };

  const handleRating = (mealId, rating) => {
    console.log(`Rated meal ${mealId} with ${rating} stars`);
  };

  return (
    <div className="App">
      <h1>React Meal App</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onInputChange={e => setSearchTerm(e.target.value)}
      />

      <CountrySearchBar
        searchTerm={countrySearchTerm}
        onSearch={handleCountrySearch}
        onInputChange={e => setCountrySearchTerm(e.target.value)}
      />
      <MealList meals={meals} onMealClick={handleMealClick} />


      {selectedMeal && (
        <MealDetails selectedMeal={selectedMeal} onRating={handleRating} />
      )}
    </div>
  );
}

export default App;