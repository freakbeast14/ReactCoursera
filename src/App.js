import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

function App() {
  return (
    <div>
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href='/'>Navbar</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {DISHES}/>
    </div>
  );
}

export default App;
