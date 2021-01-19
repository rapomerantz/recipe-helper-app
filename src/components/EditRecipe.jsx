import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Card, Form, FormControl, InputGroup, Table} from "react-bootstrap";
import Loading from "./Loading";
import {immutableMove} from "../utilities/array-utility";
import EditSteps from "./EditSteps";
import EditIngredients from "./EditIngredients";
import EditRecipeDetails from "./EditRecipeDetails";
import {getRecipe} from "../services/recipeService";

const measurementOptionsResult = [
  'whole',
  'cups',
  'teaspoons',
  'tablespoons'
]
const emptyRows = {
  ingredients: {
    id: null,
    name: '',
    order: null,
    measurementName: 'whole',
    measurementQuantity: 1,
    notes: ''
  },
  steps: {
    id: null,
    order: null,
    text: ''
  }
}

export default function EditRecipe() {
  const {recipeId} = useParams()
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [measurementOptions, setMeasurementOptions] = useState([]);

  useEffect(async () => {
    const recipeResult = await getRecipe(recipeId);
    setRecipe(recipeResult);
    setLoading(false);
    setMeasurementOptions(measurementOptionsResult);
  }, [])

  function handleDetailChange(event) {
    event.persist();
    setRecipe((current) => {
      return {
        ...current,
        [event.target.id]: event.target.value
      }
    })
  }

  function handleRecipeListItemChange(event, listName, fieldName, changedId) {
    let newValue = event.target.value;
    if (!isNaN(newValue) && newValue !== '') {
      newValue = parseFloat(newValue);
    }

    setRecipe((current) => {
      return {
        ...current,
        [listName]: current[listName].map((row) => {
          if (row.id === changedId) {
            row[fieldName] = newValue;
            return row;
          }

          return row;
        })
      }
    })
  }

  function handleAddRecipeListItem(event, listName) {
    event.preventDefault();
    setRecipe((current) => {
      const newItem = {
        ...emptyRows[listName],
        id: Math.random() * 1000,
        order: current[listName].length + 1
      };
      return {
        ...current,
        [listName]: [
          ...current[listName],
          newItem
        ]
      }
    })
  }

  function handleRemoveRecipeListItem(event, listName, id) {
    event.preventDefault();
    setRecipe((current) => {
      return {
        ...current,
        [listName]: current[listName].filter((i) => i.id !== id)
      }
    })
  }

  function handleShiftIngredient(event, index, directionInteger) {
    event.preventDefault();
    setRecipe((current) => {
      if (current.ingredients.length <= 1) return {...current};
      const newIngredientsArray = immutableMove(current.ingredients, index, index + directionInteger);
      newIngredientsArray.forEach((item, index) => {
        newIngredientsArray[index].order = index;
      })

      return {
        ...current,
        ingredients: newIngredientsArray
      }
    })
  }

  if (loading) return <Loading/>

  return (
      <>
        <Card>
          <Card.Body>
            <Form>

              <EditRecipeDetails recipe={recipe}
                                 handleDetailChange={handleDetailChange}/>

              <EditIngredients recipe={recipe}
                               handleRecipeListItemChange={handleRecipeListItemChange}
                               handleRemoveRecipeListItem={handleRemoveRecipeListItem}
                               handleAddRecipeListItem={handleAddRecipeListItem}
                               handleShiftIngredient={handleShiftIngredient}
                               measurementOptions={measurementOptions}
              />

              <EditSteps recipe={recipe}
                         handleRecipeListItemChange={handleRecipeListItemChange}
                         handleRemoveRecipeListItem={handleRemoveRecipeListItem}
                         handleAddRecipeListItem={handleAddRecipeListItem}/>

            </Form>
          </Card.Body>
        </Card>

        {/*<Card>*/}
        {/*  <Card.Body>*/}
        {/*    <pre>{JSON.stringify(recipe, null, 2)}</pre>*/}
        {/*  </Card.Body>*/}
        {/*</Card>*/}
      </>
  )
}