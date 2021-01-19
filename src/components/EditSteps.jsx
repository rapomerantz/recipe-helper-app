import React from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function EditSteps({
                                    recipe,
                                    handleRecipeListItemChange,
                                    handleRemoveRecipeListItem,
                                    handleAddRecipeListItem
                                  }) {

  return (
      <>
        <h3>Steps</h3>
        {
          recipe.steps.map((step) => {
            return (
                <div key={step.id}>
                  <InputGroup>
                    <InputGroup.Prepend>

                      <InputGroup.Text>
                        {step.order}
                      </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl id={`step-${step.order}`}
                                 onChange={
                                   (event) => handleRecipeListItemChange(event, 'text', 'steps', step.id)
                                 }
                                 type="text"
                                 value={step.text}/>
                    <InputGroup.Append>

                      <InputGroup.Text onClick={(event) => handleRemoveRecipeListItem(event, 'steps', step.id)}>
                        <FontAwesomeIcon icon={faMinus}/>
                      </InputGroup.Text>
                    </InputGroup.Append>

                  </InputGroup>
                </div>
            )
          })
        }

        <Button className='btn-secondary' onClick={(event) => handleAddRecipeListItem(event, 'steps')}>
          <FontAwesomeIcon icon={faPlus}/>
        </Button>
      </>
  )
}