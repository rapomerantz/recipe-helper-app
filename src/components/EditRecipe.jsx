import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import {Button} from "react-bootstrap";
import Loading from "./Loading";

const recipeResult = {
  id: 500,
  title: "Brussels Sprouts with Brown Butter",
  author: "Dang Ton",
  prepTime: 45,
  intro: "A basic method for a family of 4",
  yield: 4,
  ingredients: [
    {
      id: 200,
      name: "egg",
      order: 1,
      measurementName: "unit",
      measurementQuantity: 1
    },
    {
      id: 201,
      name: "olive oil",
      order: 2,
      measurementName: "tablespoon",
      measurementQuantity: 1
    }
  ],
  steps: [
    {
      id: 5000,
      order: 1,
      text: 'Heat oven to 350'
    },
    {
      id: 5001,
      order: 2,
      text: 'Crack eggs into a bowl. Beat lightly until just combined.'
    }
  ]
}

export default function EditRecipe() {
  const {recipeId} = useParams()
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipe(recipeResult);
    setLoading(false);
  }, [])

  if (loading) return <Loading/>

  return (
      <>
        <Link to={'/view_recipes'}>
          <Button variant='outline-primary'>Back</Button>
        </Link>
        <h2>Edit recipe</h2>
        <h3>{recipeId ? recipeId : 'no id'}</h3>
      </>
  )
}