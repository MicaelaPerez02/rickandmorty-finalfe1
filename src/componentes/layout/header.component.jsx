import { Link } from "react-router-dom";
import "./header.css";

/**
 * Header of the page
 * @returns a JSX.Element
 */

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <h2>Final Exam Frontend IV - Micaela Perez</h2>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
