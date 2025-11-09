import React from "react";
import ReactDOM from "react-dom/client";
import cart from "./images/shopping-cart.png";
import logo from "./images/logo.png";

const resList = [{
  key: 1,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 2,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 3,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 4,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 5,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 6,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 7,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
},{
    key: 8,
  resName: "Friends Corner",
  cuisine: "Chinese, Indian",
  stars: "4.1",
  eta: "40-45 mins"
}];

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
        {resList.map((restaurant) => {
          return <Restaurant key={restaurant.key}  resName={restaurant.resName} cuisine={restaurant.cuisine} stars={restaurant.stars} eta={restaurant.eta} />
        })}
        {/* <Restaurant resName="Friends Corner" cuisine="Chinese, Indian" stars="4.1" eta="40-45 mins" /> */}
        {/* <Restaurant resName="Green Chick Chop" cuisine="Starters" stars="4.0" eta="20-25 mins" /> */}
        {/* <Restaurant resName="KFC" cuisine="Fried chicken, Burger" stars="4.3" eta="30-35 mins" /> */}
      </div>
    </div>
  );
};

const Restaurant = (props) => {
  const {resName, cuisine, stars, eta} = props;
  return (
    <div className="res-card">
        <img alt="Res-Logo" src={logo}/>
      <h3>{ resName}</h3>
      <h4>{cuisine}</h4>
      <div className="eta">
      <h4 >🌟{stars}</h4><h4>{eta}</h4>
   </div>
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
 