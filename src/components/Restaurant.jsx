import logo from "../../images/logo.png";

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

export default Restaurant;