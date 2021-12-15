import './App.css';
import { BrowserRouter, Switch, Route, Navlink } from 'react-router-dom';
import { Books, Films, Characters } from './views';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <Books />
          </Route>
          <Route>
            <Films />
          </Route>
          <Route>
            <Characters />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
