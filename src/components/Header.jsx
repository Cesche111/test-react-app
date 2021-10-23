import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>MainView</Link>
                </li>
                <li>
                    <Link to='/CartView'>CartView</Link>
                </li>
                <li>
                    <Link to='/EditView'>EditView</Link>
                </li>
                <li>
                    <Link to='/CreateView'>CreateView</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;