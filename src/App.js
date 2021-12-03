
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbarup from './components/navbar/Navbarup';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbarup/>
      <Route path ="/" exact >
        <Home/>
      </Route>
      <Route path ="/cart" exact >
        <Cart/>
      </Route>
    </Router>
  );
}

export default App;
