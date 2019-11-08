
const apiKey = "d1b80adcb0bf3f17dbfc66d11bc78afd"
const cityId = 82 // Lisbon
const cuisineId = 83 // Seafood
const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

// ARRAY for json from API
let restaurantList = []


fetch(url, { headers: { "user-key": apiKey } })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    restaurantList = json.restaurants
    restaurantList.forEach((resto) => {
      document.getElementById("restaurants").innerHTML +=
        `<img src=${resto.restaurant.photos[0].photo.thumb_url}> 
      <li>${resto.restaurant.name} </li> 
      <li>${resto.restaurant.average_cost_for_two} €</li> 
      <li>${resto.restaurant.location.address}</li> 
      <li>${resto.restaurant.user_rating.aggregate_rating}</li>
      <li>${resto.restaurant.price_range}</li>`
    })
  });


  // FUNCTIONS
 // Filter on price range

 document.getElementById("price-3").addEventListener('click', () => {
   renderRestaurants()
 })

  const renderRestaurants = () => {
    restaurantList.forEach((resto) => {
      if (resto.restaurant.price_range !== 3) {
        console.log("hide")
        } else {
        console.log ("show")
        }
    })
  }
