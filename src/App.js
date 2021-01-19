import './App.css';
import ViewAllRecipes from "./components/ViewAllRecipes";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import EditRecipe from "./components/EditRecipe";
import NotFound from "./components/NotFound";


function App() {
  return (
      <>
        <div>
          <Router>
            <Header/>
            <main className="main-content">
              <Switch>
                <Route path="/edit_recipe/:recipeId">
                  <EditRecipe/>
                </Route>

                <Route path="/edit_recipe/">
                  <EditRecipe/>
                </Route>

                <Route path="/view_recipes">
                  <ViewAllRecipes/>
                </Route>

                <Route exact path="/">
                  <Redirect to="/view_recipes"/>
                </Route>

                <Route path="/*">
                  <NotFound/>
                </Route>

              </Switch>
            </main>
          </Router>
        </div>
      </>
  );
}

export default App;
