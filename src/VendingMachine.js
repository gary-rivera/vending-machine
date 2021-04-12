import { NavLink, Route } from 'react-router-dom';
import Soda from './Soda';

function VendingMachine() {
  return (
    <nav> 
      <NavLink exact to='/soda'> Soda </NavLink>
      <NavLink exact to='/chips'> Chips </NavLink>
      <NavLink exact to='/sardines'> Sardines</NavLink>
    </nav>  
  )
}

export default VendingMachine;