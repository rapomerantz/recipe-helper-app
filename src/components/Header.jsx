import React from "react";
import {Button, Jumbotron} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header() {

  return (
      <Jumbotron>
        <Link to={'/view_recipes'}>
          <h1>Recipe Assistant</h1>
          <h4>The kitchen is your canvas</h4>
        </Link>
      </Jumbotron>
  )
}