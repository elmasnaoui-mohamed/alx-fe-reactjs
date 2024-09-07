import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router> {/* Wrap the components with Router */}
      <div>
        <h1>Recipe Sharing Application</h1>
        <Routes> {/* Define routes for different components */}
          <Route path="/" element={<>
            <AddRecipeForm />
            <RecipeList />
          </>} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
