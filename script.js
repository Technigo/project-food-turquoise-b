
const apiKey = "d1b80adcb0bf3f17dbfc66d11bc78afd"
const cityId = 82 // Lisbon
const cuisineId = 83 // Seafood
const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

// ARRAY for json from API
let restaurants = []
const price3 = document.getElementById("price-3")
const price4 = document.getElementById("price-4")

fetch(url, { headers: { "user-key": apiKey } })
  .then((res) => res.json())
  .then((json) => {
    // console.log(json);
    restaurants = json
    console.log(restaurants)
  });
  // });

  // price3.onclick = filterPrice3()

  // FUNCTIONS
 // Filter on price range
  const filterPrice3 = () =>  {
    if (resto.restaurant.price_range !== 3) {
      console.log("hide")
      // json.restaurants.forEach((resto) => {
        // console.log(resto.restaurant.price_range)
        document.getElementById("restaurants").innerHTML +=
        `don't show`  
      } else {
      console.log ("show")
    }
  }

  // FOR each restaurant in array

restaurants.forEach((resto) => {
    console.log(resto.restaurant.name)
    // document.getElementById("restaurants").innerHTML +=
    //   `<img src=${resto.restaurant.photos[0].photo.thumb_url}> 
    // <li>${resto.restaurant.name} </li> 
    // <li>${resto.restaurant.average_cost_for_two} €</li> 
    // <li>${resto.restaurant.location.address}</li> 
    // <li>${resto.restaurant.user_rating.aggregate_rating}</li>
    // <li>${resto.restaurant.price_range}</li>`
  })
