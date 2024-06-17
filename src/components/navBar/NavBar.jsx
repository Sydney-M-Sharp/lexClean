import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    return <ul className="navbar">
        <li className="navbar-item">
            <Link to='/'>Home</Link>
        </li>



        
            <>
                <li className="navbar-item">
                    <Link to='/products'>Products</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/faq'>FAQ</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/reviews'>Reviews</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/about-lex'>About Lex</Link>
                </li>
            </>


    </ul>
}