const heure = document.querySelector('#heure');
const temperature = document.querySelector('#temperature');
const humidite = document.querySelector('#humidite');
const lieu = document.querySelector('#lieu');
const temps = document.querySelector('#temps');
const icon = document.querySelector('#icon');
var date = new Date();

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=4bf558d6703a571b73fb51bc44fa5f70&units=metric&lang=fr`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        heure.textContent = (date.getHours()+data.timezone/60/60)-2 + ":" +date.getMinutes() +":" + date.getSeconds();
        temperature.textContent = data.main.temp;
        humidite.textContent = data.main.humidity;
        lieu.textContent = data.name;
        temps.textContent = data.weather[0].description;
        icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    });

function requete(){
    var cityName=document.getElementById("nameInput").value;
    console.log(cityName); 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bf558d6703a571b73fb51bc44fa5f70&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            heure.textContent = (date.getHours()+data.timezone/60/60)-2 + ":" +date.getMinutes() +":" + date.getSeconds();
            temperature.textContent = data.main.temp;
            humidite.textContent = data.main.humidity;
            lieu.textContent = data.name;
            temps.textContent = data.weather[0].description;
            icon.setAttribute('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        });
}