import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <ul className="navbar">
            <div className="navbar-logo">
                <img src="src/assets/smaller.png"  alt="Lex Clean Logo" className="logo" />
                <span className="brand-name">Lex Clean</span>
            </div>
            <div className="navbar-content">
                <li className="navbar-item">
                    <Link className="navbar-link" to='/'>Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/products'>Products</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/faq'>FAQ</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/reviews'>Reviews</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/about-lex'>About Lex</Link>
                </li>
            </div>
        </ul>
    );
}
