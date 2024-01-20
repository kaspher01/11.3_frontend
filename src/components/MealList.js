import React from 'react';

const MealList = ({ meals, onMealClick }) => {
  return (
    <div className="meal-list-container">
      {meals.map(meal => (
        <div key={meal.idMeal} className="meal-item" onClick={() => onMealClick(meal.idMeal)}>
          <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="meal-name">{meal.strMeal}</div>
        </div>
      ))}
    </div>
  );
};

export default MealList;