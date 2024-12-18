import { Link, useNavigate } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <ul className="navbar">
            <div className="navbar-logo">
                <img src="assets/originalLogo.png"  alt="LEXCLEAN Logo" className="logo" />
                <span className="brand-name">LEXCLEAN</span>
            </div>
            <div className="navbar-content">
                <li className="navbar-item">
                    <Link className="navbar-link" to='/lexClean/'>Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/products/'>Products</Link>
                </li>
                {/* <li className="navbar-item">
                    <Link className="navbar-link" to='/faq'>FAQ</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/reviews'>Reviews</Link>
                </li> */}
                <li className="navbar-item">
                    <Link className="navbar-link" to='/calender/'>Calender</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to='/about-lex/'>About Lex</Link>
                </li>
            </div>
        </ul>
    );
}
