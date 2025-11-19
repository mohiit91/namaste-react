import logo from "../../images/logo.png";

const Restaurant = (props) => {
  const {name, cuisines, avgRating, deliveryTime} = props;
  return (
    <div className="res-card">
        <img alt="Res-Logo" src={logo}/>
      <h3>{name}</h3>
      {/* <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h4>
       */}
      <h4>{cuisines.join(", ")}</h4>
      <div className="eta">
      <h4 >🌟{avgRating}</h4><h4>{deliveryTime}</h4>
   </div>
    </div>
  );
};

export default Restaurant;