
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
      `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${resto.restaurant.user_rating.aggregate_rating} 🐙<h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>`    
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
      `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${resto.restaurant.user_rating.aggregate_rating} 🐙<h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>` 
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
      `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${resto.restaurant.user_rating.aggregate_rating} 🐙<h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>` 
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
      `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${resto.restaurant.user_rating.aggregate_rating} 🐙<h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>` 
    })
  }
