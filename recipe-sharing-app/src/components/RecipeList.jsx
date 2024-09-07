import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <a href={`/recipe/${recipe.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
