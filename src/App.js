import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css';
import NavBar from './Navbar';
import Routes from './Routes';
let whiskey = './dogs/whiskey.jpg';
let duke = './dogs/duke.jpg';
let tubby = './dogs/tubby.jpg';
let perry = './dogs/perry.jpg';

function App({dogs}) {
  //navbar on page that's always there and then routes
  return (
    <BrowserRouter>
      <NavBar dogs={dogs}/>
      <Routes dogs={dogs}/>
    </BrowserRouter>
  );
}

App.defaultProps = {dogs: [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
]}

export default App;
