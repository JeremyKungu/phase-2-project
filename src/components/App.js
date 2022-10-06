import Home from './Home';
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Movies from './Movies';
import UploadMovie from './UploadMovie';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/search'>
          <SearchBar />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/uploadmovie'>
          <UploadMovie />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
