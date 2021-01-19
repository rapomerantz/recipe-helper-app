import React from "react";
import {Form} from "react-bootstrap";

export default function EditRecipeDetails({recipe, handleDetailChange}) {
  return (
      <>
        <h3>Recipe Details</h3>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control id='title'
                        type="text"
                        placeholder="Recipe Title"
                        value={recipe.title}
                        onChange={handleDetailChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control id='author'
                        type="text"
                        placeholder="Author's name"
                        value={recipe.author}
                        onChange={handleDetailChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Yield</Form.Label>
          <Form.Control id='yield'
                        type="number"
                        placeholder="Number of servings"
                        value={recipe.yield}
                        onChange={handleDetailChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control id='prepTime'
                        type="number"
                        placeholder="How long the recipe takes (in minutes)"
                        value={recipe.prepTime}
                        onChange={handleDetailChange}/>
          <Form.Text>
            This value should be in minutes (e.g. 2 hours = 120).
          </Form.Text>
        </Form.Group>
      </>
  )
}