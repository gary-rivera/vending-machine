import {NavLink} from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
  <nav className="NavBar">
    <NavLink exact to="/chips">Chips</NavLink>
    <NavLink exact to="/sardines">Sardines</NavLink>
    <NavLink exact to="/soda">Soda</NavLink>
  </nav>
  );
}
export default NavBar;