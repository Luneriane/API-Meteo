const heure = document.querySelector('#heure');
const temperature = document.querySelector('#temperature');
const humidite = document.querySelector('#humidite');
const lieu = document.querySelector('#lieu');
const temps = document.querySelector('#temps');
const icon = document.querySelector('#icon');
var date = new Date();

const sectionNews = document.querySelector('#news');
const objectArticle = "<h3></h3><p></p><a href=''></a>";
var newArticle = document.createElement("article");

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
        
        for (let o in data.articles) {
            if (o < 3){
                console.log("blue");
                console.log(data.articles[o].source.name);
                sectionNews.append(newArticle);
                const article = document.querySelector("#news:last-child");
                article.innerHTML = objectArticle;
                const title = document.querySelector('#news article h3:last-child');
                title.textContent = data.articles[o].title;
                const resume = document.querySelector('#news p');
                resume.textContent = data.articles[o].description;
                const link = document.querySelector('#news a');
                link.textContent = data.articles[o].source.name;
                link.setAttribute('href', data.articles[o].url);
            }else{
                return
            }
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