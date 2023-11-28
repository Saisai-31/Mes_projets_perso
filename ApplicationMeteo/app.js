//Creer les valiariables pour récupérer nos éléments dans le html
const chercherBtn = document.querySelector("#search-btn");
const chercherInput = document.querySelector("#search-input");
const emplacementEl = document.querySelector("#location");
const temperatureEl = document.querySelector("#temperature");
const descriptionEl = document.querySelector("#description");

//Un gestionnaire d'évennement pour les boutons, lorsque l'évènement click se produit, il réagit en exécutant le code suivant :  
chercherBtn.addEventListener('click', () => {
    const ville = chercherInput.value;
    //fecth va nous permettre d'aller chercher l'API sur .openweathermap.org
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=cc286b027192e5c887dbb1bbdaf2c169`)
    //L'API me retourne les information en JSON, je vais utiliser la méthode respnse, analyse le fichichier json et le transforme dans son objet.
    .then(response => response.json())
    //la méthode then pour gérer la réponse json et la mettre dans la variable données
    .then(donnees => {
        emplacementEl.textContent = donnees.name;
        temperatureEl.textContent = `Température : ${donnees.main.temp} °C`;
        descriptionEl.textContent = `Description : ${donnes.weather[0].description}';
    })


