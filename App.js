import React from "react";
import ReactDOM from "react-dom/client";
import cart from "./images/shopping-cart.png";
import logo from "./images/logo.png";

const Heading = () => {
  return (
    <div className="header">
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
    </div>  
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </div>
  );
};

const Restaurant = () => {
  return (
    <div className="res-card">
        <img alt="Res-Logo" src={logo}/>
      <h3>Friends Corner</h3>
      <h4>Chinese, Indian</h4>
      <h4>4.1 Stars</h4>
      <h4>40-45 Mins</h4>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// root.render(jsxHeading);
 