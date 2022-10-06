import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import UploadMovie from './UploadMovie';
import Reviews from './Reviews';


function App() {
  return (
    <div> 
      <Router>     
      <NavBar />      
      <Routes>
        <Route path='/search' element={<SearchBar/>}/>        
        <Route path='/uploadmovie' element={<UploadMovie/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/' element={<Home/>}/>          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
