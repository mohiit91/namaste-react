import Restaurant from "./Restaurant";
import resList from "../utils/mockData";

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

export default Body;