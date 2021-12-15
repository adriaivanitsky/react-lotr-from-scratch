import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Books from './views/Books/Books';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/characters">Characters</NavLink>
        </header>
        <Switch>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
