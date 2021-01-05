import './App.css';
import ViewAllRecipes from "./components/ViewAllRecipes";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import EditRecipe from "./components/EditRecipe";
import NotFound from "./components/NotFound";


function App() {
  return (
      <>
        <div>
          <Header/>
          <main className="main-content">
            <Router>
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

                <Route path="/*">
                  <NotFound/>
                </Route>

              </Switch>
            </Router>
          </main>
        </div>
      </>
  );
}

export default App;
