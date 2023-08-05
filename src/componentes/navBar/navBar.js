import "./NavBar.css"
import Logo from "./logo.png"
function NavBar() {
    return(
        <header>
            <a href=""><img src={Logo} className="logo"/></a>
            
            <div className="toggle"></div>

            <ul className="nav">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </header>
    )
}
export default NavBar;
