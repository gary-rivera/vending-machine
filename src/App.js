import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/'> 
        <VendingMachine />
      </Route>
      <Route exact path='/soda'>
        <Soda />
      </Route>
      <Route exact path='/chips'>
        <Chips />
      </Route>
      <Route exact path='/sardines'>
        <Sardines />
      </Route>
    </BrowserRouter>
  );
}

export default App;
