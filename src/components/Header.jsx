import logo from "../../images/logo.png";
import cart from "../../images/shopping-cart.png"; 

const Header = () => {
    return( <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" /> <strong>DhamKing</strong>
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>
                <img src={cart} alt="logo" />
              </li>
            </ul>
          </div>
        </div>  );
}

export default Header;