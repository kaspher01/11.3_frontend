import React from 'react';

const MealDetails = ({ selectedMeal, onRating }) => {

  return (
    <div className="meal-details-container">
      <h2>{selectedMeal.strMeal}</h2>
      <img className="meal-image" src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
      <p>{selectedMeal.strInstructions}</p>

      <div>
        <p>Rate this meal:</p>
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} onClick={() => onRating(selectedMeal.idMeal, star)}>
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
};

export default MealDetails;