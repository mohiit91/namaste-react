import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useState, useEffect  } from "react";

const Body = () => {

  const [list, setList] = useState(resList);

  useEffect(() => {
    fetchData();
  },[]);

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};


  return (
    <div className="body">
      <div className="search">Search</div>
      <div
        className="btn" onClick={()=>{
          filteredList = list.filter( (restaurant) => restaurant.stars > 4 );
          setList(filteredList);
        }}>top rated restaurant</div>
      <div className="res-container">
        {list.map((restaurant) => {
          return (
            <Restaurant
              key={restaurant.key}
              resName={restaurant.resName}
              cuisine={restaurant.cuisine}
              stars={restaurant.stars}
              eta={restaurant.eta}
            />
          );
        })}
        {/* <Restaurant resName="Friends Corner" cuisine="Chinese, Indian" stars="4.1" eta="40-45 mins" /> */}
        {/* <Restaurant resName="Green Chick Chop" cuisine="Starters" stars="4.0" eta="20-25 mins" /> */}
        {/* <Restaurant resName="KFC" cuisine="Fried chicken, Burger" stars="4.3" eta="30-35 mins" /> */}
      </div>
    </div>
  );
};

export default Body;
