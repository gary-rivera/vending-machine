import { NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ dogs }) {
  return (
    <nav className="NavBar">
      {dogs.map(d => (
        <NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</NavLink>
      ))}
    </nav>
  );
}
export default NavBar;