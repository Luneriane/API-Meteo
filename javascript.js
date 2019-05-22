const heure = document.querySelector('#heure');
const temperature = document.querySelector('#temperature');
const humidite = document.querySelector('#humidite');
const lieu = document.querySelector('#lieu');
const temps = document.querySelector('#temps');

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=4bf558d6703a571b73fb51bc44fa5f70&units=metric&lang=fr`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        heure.textContent = data.main.temp;
        temperature.textContent = data.main.temp;
        humidite.textContent = data.main.humidity;
        lieu.textContent = data.name;
        temps.textContent = data.weather[0].description;
    });

function requete(){
    var cityName=document.getElementById("nameInput").value;
    console.log(cityName); 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bf558d6703a571b73fb51bc44fa5f70&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            heure.textContent = data.main.temp;
            temperature.textContent = data.main.temp;
            humidite.textContent = data.main.humidity;
            lieu.textContent = data.name;
            temps.textContent = data.weather[0].description;
        });
}