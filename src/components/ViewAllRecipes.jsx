import React, {useEffect, useState} from "react";
import RecipeSummary from "./RecipeSummary";
import Loading from "./Loading";
import {Button} from "react-bootstrap";

const recipesResult = [
  {
    id: 500,
    title: "Brussels Sprouts with Brown Butter",
    author: "Dang Ton",
    prepTime: 45,
    intro: "A basic method for a family of 4",
    yield: 4
  },
  {
    id: 600,
    title: "Fried Eggs with Sesame Oil",
    author: "Atticus Pomerantz",
    prepTime: 5,
    intro: "Traditional fried eggs with a twist!",
    yield: 2
  }
]

export default function ViewAllRecipes () {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRecipes(recipesResult);
      setLoading(false);
    }, 300)
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