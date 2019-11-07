const apiKey = "d1b80adcb0bf3f17dbfc66d11bc78afd"

const cityId = 82 // Lisbon
const cuisineId = 83 // Seafood

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

fetch(url, { headers: { "user-key": apiKey } })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.restaurants.forEach((resto) => {
      //console.log(resto.restaurant.name)
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h3>Price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h3></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h5>Rating: ${resto.restaurant.user_rating.aggregate_rating} 🐙<h5></li></div>`
    });
  });

