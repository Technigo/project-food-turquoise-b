
const apiKey = "d1b80adcb0bf3f17dbfc66d11bc78afd"
const cityId = 82 // Lisbon
const cuisineId = 83 // Seafood
const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

// ARRAY for json from API
let restaurantList = []
// HTML DIV FOR RESTAURANTS


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
   filter3()
 })

  const filter3 = () => {
    // Null all restaurants
    document.getElementById("restaurants").innerHTML=""
    restaurantList.forEach((resto) => {
      if (resto.restaurant.price_range == 3) {
        //show restaurants if price range = 3
        document.getElementById("restaurants").innerHTML +=
        `<img src=${resto.restaurant.photos[0].photo.thumb_url}> 
        <li>${resto.restaurant.name} </li> 
        <li>${resto.restaurant.average_cost_for_two} €</li> 
      <li>${resto.restaurant.location.address}</li> 
      <li>${resto.restaurant.user_rating.aggregate_rating}</li>
      <li>${resto.restaurant.price_range}</li>`
        } else {
          // don't show other restaurants
          return
        }
    })
  }

  document.getElementById("price-4").addEventListener('click', () => {
    filter4()
  })

  const filter4 = () => {
    // Null all restaurants
    document.getElementById("restaurants").innerHTML=""
    restaurantList.forEach((resto) => {
      if (resto.restaurant.price_range == 4) {
        //show restaurants if price range = 4
        document.getElementById("restaurants").innerHTML +=
        `<img src=${resto.restaurant.photos[0].photo.thumb_url}> 
        <li>${resto.restaurant.name} </li> 
        <li>${resto.restaurant.average_cost_for_two} €</li> 
      <li>${resto.restaurant.location.address}</li> 
      <li>${resto.restaurant.user_rating.aggregate_rating}</li>
      <li>${resto.restaurant.price_range}</li>`
        } else {
          // don't show other restaurants
          return
        }
    })
  }
  document.getElementById("restore-filter").addEventListener('click', () => {
    restoreFilter()
  })

  const restoreFilter = () => {
    // Null all restaurants
    document.getElementById("restaurants").innerHTML=""
    restaurantList.forEach((resto) => {
        //show all restaurants 
        document.getElementById("restaurants").innerHTML +=
        `<img src=${resto.restaurant.photos[0].photo.thumb_url}> 
        <li>${resto.restaurant.name} </li> 
        <li>${resto.restaurant.average_cost_for_two} €</li> 
      <li>${resto.restaurant.location.address}</li> 
      <li>${resto.restaurant.user_rating.aggregate_rating}</li>
      <li>${resto.restaurant.price_range}</li>`
    })
  }
