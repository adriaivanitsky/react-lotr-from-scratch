import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Books, Films, Characters } from './views';

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
