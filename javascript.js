const heure = document.querySelector('#heure');
const temperature = document.querySelector('#temperature');
const humidite = document.querySelector('#humidite');
const lieu = document.querySelector('#lieu');
const temps = document.querySelector('#temps');
const icon = document.querySelector('#icon');
var date = new Date();

const myNews = document.querySelector('#news');
const article = "<article></article>";
const title = "<h3></h3>";
const resume = "<p></p>";
const link = "<a href=''></a>";
const source = "<p></p>";

fetch(`https://api.apixu.com/v1/current.json?key=25aff8fbdd17436eb17103421192305&q=Paris&lang=fr`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        heure.textContent = data.location.localtime;
        temperature.textContent = data.current.temp_c + "°C";
        humidite.textContent = data.current.humidity + "%";
        lieu.textContent = data.location.name;
        temps.textContent = data.current.condition.text;
        icon.setAttribute('src', data.current.condition.icon);
    })
    
fetch('https://newsapi.org/v2/top-headlines?apiKey=75f72e9259014655bfd118635173c497&q=Paris')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (var i; i <= data.articles.length; i++){
            var article = "<article></article>";
            var title = "<h3>" + data.articles[i].title + "</h3>";
            var resume = "<p>" + data.articles[i].description + "</p>";
            var link = "<a>" + data.articles[i].url + "</a>";
            var source = "<p>" + data.articles[i].source.name + "</p>";

            
            link.setAttribute('src', data.articles[i].url);
            source.textContent = data.articles[i].source.name;
            link.innerHTML = source;

            console.log(myNews);

            const myNews = document.querySelector('#news');
const article = "<article></article>";
const title = "<h3></h3>";
const resume = "<p></p>";
const link = "<a></a>";
const source = "<p></p>";
        }
    })

function requete(){
    var cityName=document.getElementById("nameInput").value;
    console.log(cityName); 
    fetch(`https://api.apixu.com/v1/current.json?key=25aff8fbdd17436eb17103421192305&q=${cityName}&lang=fr`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            heure.textContent = data.location.localtime;
            temperature.textContent = data.current.temp_c + "°C";
            humidite.textContent = data.current.humidity + "%";
            lieu.textContent = data.location.name;
            temps.textContent = data.current.condition.text;
            icon.setAttribute('src', data.current.condition.icon);
        });
}