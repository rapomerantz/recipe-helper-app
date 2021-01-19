import React from "react";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {faChevronDown, faChevronUp, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function IngredientRow({
                                        index,
                                        ingredients,
                                        measurementOptions,
                                        handleRecipeListItemChange,
                                        handleRemoveRecipeListItem,
                                        handleShiftIngredient
                                      }) {
  const ingredient = ingredients[index];

  return (
      <tr>
        <td>
            {index !== 0 &&
              <Button className='btn-secondary'
                      disabled={index === 0 ? true : false}
                      onClick={(event) => handleShiftIngredient(event, index, -1)}>
                <FontAwesomeIcon icon={faChevronUp}/>
              </Button>
            }

            {index !== ingredients.length - 1 &&
              <Button className='btn-secondary'
                      disabled={index === ingredients.length - 1 ? true : false}
                      onClick={(event) => handleShiftIngredient(event, index, 1)}>
                <FontAwesomeIcon icon={faChevronDown}/>
              </Button>
            }
        </td>

        <td>
          <Form.Group>
            <Form.Control id={`ingredient-name-id-${ingredient.id}`}
                          type="text"
                          value={ingredient.name}
                          onChange={(event) => {
                            handleRecipeListItemChange(event, 'ingredients', 'name', ingredient.id)
                          }
                          }/>
          </Form.Group>
        </td>
        <td>
          <Form.Group>
            <Form.Control id={`ingredient-measurement-quantity-id-${ingredient.id}`}
                          type="number"
                          value={ingredient.measurementQuantity}
                          onChange={(event) => {
                            handleRecipeListItemChange(event, 'ingredients', 'measurementQuantity', ingredient.id)
                          }
                          }/>
          </Form.Group>
        </td>
        <td>
          <Form.Group>
            <Form.Control as="select"
                          id={`ingredient-measurement-name-id-${ingredient.id}`}
                          value={ingredient.measurementName}
                          onChange={(event) => {
                            handleRecipeListItemChange(event, 'ingredients', 'measurementName', ingredient.id)
                          }
                          }>

              {measurementOptions.map((measurementOption) => {
                return (
                    <option key={measurementOption}
                            value={measurementOption}>
                      {measurementOption}
                    </option>)
              })}
            </Form.Control>
          </Form.Group>
        </td>
        <td>
          <Form.Group>
            <Form.Control id={`ingredient-notes-id-${ingredient.id}`}
                          type="text"
                          value={ingredient.notes}
                          onChange={(event) => {
                            handleRecipeListItemChange(event, 'ingredients', 'notes', ingredient.id)
                          }
                          }/>
          </Form.Group>
        </td>
        <td>
          <Button className='btn-danger'
                  onClick={(event) => handleRemoveRecipeListItem(event, 'ingredients', ingredient.id)}>
            <FontAwesomeIcon icon={faTrash}/>
          </Button>
        </td>
      </tr>
  )
}