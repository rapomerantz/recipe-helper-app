import React from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function RecipeSummary({recipe}) {
  return (
      <Card>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.author}</Card.Text>
          </div>
          <div>
            <Link to={`/edit_recipe/${recipe.id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
  )
}