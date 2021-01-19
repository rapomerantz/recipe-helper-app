import React from "react";
import {Button, Form, Table} from "react-bootstrap";
import IngredientRow from "./IngredientRow";

export default function EditIngredients ({
                                           recipe,
                                           handleRecipeListItemChange,
                                           handleRemoveRecipeListItem,
                                           handleAddRecipeListItem,
                                           handleShiftIngredient,
                                           measurementOptions
                                         })
{
  return (
      <>
        <h3>Ingredients</h3>
        <Table striped bordered>
          <thead>
          <tr>
            <th></th>
            <th>Ingredient</th>
            <th>Quantity</th>
            <th>Unit of Measurement</th>
            <th>Treatment Details</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {recipe.ingredients.map((ingredient, index) => {
            return (<IngredientRow key={ingredient.id}
                                   index={index}
                                   ingredients={recipe.ingredients}
                                   handleRecipeListItemChange={handleRecipeListItemChange}
                                   handleRemoveRecipeListItem={handleRemoveRecipeListItem}
                                   handleShiftIngredient={handleShiftIngredient}
                                   measurementOptions={measurementOptions}/>)
          })
          }
          <tr>
            <td>
              <Button className='btn-secondary'
                      onClick={(event) => {
                        handleAddRecipeListItem(event, 'ingredients')
                      }}>
                Add
              </Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </Table>
      </>
  )
}