const baseUrl = 'http://localhost:3001';

export async function getRecipes() {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}recipes`);
  if (response.ok) return response.json();
  throw response;
}

export async function getRecipe(recipeId) {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}recipes/${recipeId}`);
  if (response.ok) return response.json();
  throw response;
}