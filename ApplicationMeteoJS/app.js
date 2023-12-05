//Je créé une constante avec ma clé API
const APIKEY = "cc286b027192e5c887dbb1bbdaf2c169";
//Je prends l'url sur Open Weather, je met la ville Parris et j'ajoute mon clé API
//J'ajoute &units=metric pour transformer les température en Celcius
//J'ajoute &lang=fr pour recevoir les information en francais
let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
    response.json().then((data) => console.log(data))
);

14min39