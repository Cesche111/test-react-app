import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
    <header className='header'>
        <nav>
            <ul id="Nav_menu">
                <li>
                    <NavLink exact to='/' className="Nav_link"
                          activeClassName="activeRoute"
                          activeStyle={{ color: 'teal' }}>MainView</NavLink>
                </li>
                <li>
                    <NavLink exact to='/EditView' className="Nav_link"
                          activeClassName="activeRoute"
                          activeStyle={{ color: 'teal' }}>EditView</NavLink>
                </li>
                <li>
                    <NavLink exact to='/CreateView' className="Nav_link"
                          activeClassName="activeRoute"
                          activeStyle={{ color: 'teal' }}>CreateView</NavLink>
                </li>
                <li>
                    <NavLink exact to='/CartView' className="Nav_link"
                          activeClassName="activeRoute"
                          activeStyle={{ color: 'teal' }}>CartView</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)

export default Navbar;