import Restaurant from "./Restaurant";
import { useState, useEffect  } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  let jsonData =json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  console.log(jsonData)
  jsonData = jsonData.map( (restaurant) => (restaurant.info));
  console.log(jsonData)
  setList(jsonData);  
};

//conditional rendering
// if(list.length === 0){
//   return <Shimmer />;
// }

  return list.length === 0 ? (<Shimmer/>) : 
  (
    <div className="body">
      <div className="search">Search</div>
      <div
        className="btn" onClick={()=>{
          filteredList = list.filter( (restaurant) => restaurant.avgRating > 4.3 );
          setList(filteredList);
        }}>top rated restaurant</div>
      <div className="res-container">
        {list.map((restaurant) => {
          return (
            <div>
              <Restaurant
                key={restaurant.id}
                name={restaurant.name}
                cuisines={restaurant.cuisines}
                avgRating = {restaurant.avgRating}
                deliveryTime = {restaurant.sla.deliveryTime}/>
            </div>
            // <div style={{border: '1px solid black', marginBottom: '100px'}} key={restaurant.id}>
            //   {JSON.stringify(restaurant)}
            //   </div>
              // <Restaurant
                // widgetId={index + 1}
            // <Restaurant
            //   key={index}
            //   resName={restaurant.resName}
            //   cuisine={restaurant.cuisine}
            //   stars={restaurant.stars}
            //   eta={restaurant.eta}
            // />
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
