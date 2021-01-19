import React, {useEffect, useState} from "react";
import RecipeSummary from "./RecipeSummary";
import Loading from "./Loading";
import {Button} from "react-bootstrap";
import {getRecipes} from "../services/recipeService";

export default function ViewAllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let recipesResult = [];
    try {
      recipesResult = await getRecipes();
      setRecipes(recipesResult);
    } catch (e) {
      console.error('no data');
      throw e;
    }
    finally {
      setLoading(false);
    }
  }, [])

  if (loading) return <Loading/>

  return (
      <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2>All Recipes</h2>
          <Button variant={'outline-secondary'}>New Recipe</Button>
        </div>
        {
          recipes.map((recipe) => {
            return <RecipeSummary key={recipe.id} recipe={recipe}/>
          })
        }
      </>
  )
}