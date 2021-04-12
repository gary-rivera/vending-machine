import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css';
import NavBar from './Navbar';
import Routes from './Routes';

function App() {
  //navbar on page that's always there and then routes
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
