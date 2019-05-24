const heure = document.querySelector('#heure');
const temperature = document.querySelector('#temperature');
const humidite = document.querySelector('#humidite');
const lieu = document.querySelector('#lieu');
const temps = document.querySelector('#temps');
const icon = document.querySelector('#icon');
var date = new Date();
var sectionNews = document.querySelector('#news');

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
                console.log(data.articles[o].source.name);

                //Déclaration des créations d'éléménents
                var newArticle = document.createElement("article");
                var newTitle = document.createElement("h3");
                var newText = document.createElement("p");
                var newLink = document.createElement("a");

                //Ajout d'un nouvel article
                sectionNews.append(newArticle);

                //Ajout d'un nouveau titre à l'article
                const article = document.querySelector("#news article:last-child");
                article.append(newTitle);
                const title = document.querySelector('#news article:last-child h3');
                title.textContent = data.articles[o].title;

                //Ajout d'un nouveau texte à l'article
                article.append(newText);
                const resume = document.querySelector('#news article:last-child p');
                resume.textContent = data.articles[o].description;

                //Ajout d'un nouveau lien à l'article
                article.append(newLink);
                const link = document.querySelector('#news article:last-child a');
                link.textContent = data.articles[o].source.name;
                link.setAttribute('href', data.articles[o].url);

                console.log(article);
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
        fetch(`https://newsapi.org/v2/top-headlines?apiKey=75f72e9259014655bfd118635173c497&q=${cityName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            sectionNews.innerHTML = "";
            console.log(sectionNews);

            for (let o in data.articles) {
                if (o < 3){
                    console.log(data.articles[o].source.name);

                //Déclaration des créations d'éléménents
                var newArticle = document.createElement("article");
                var newTitle = document.createElement("h3");
                var newText = document.createElement("p");
                var newLink = document.createElement("a");

                //Ajout d'un nouvel article
                sectionNews.append(newArticle);

                //Ajout d'un nouveau titre à l'article
                const article = document.querySelector("#news article:last-child");
                article.append(newTitle);
                const title = document.querySelector('#news article:last-child h3');
                title.textContent = data.articles[o].title;

                //Ajout d'un nouveau texte à l'article
                article.append(newText);
                const resume = document.querySelector('#news article:last-child p');
                resume.textContent = data.articles[o].description;

                //Ajout d'un nouveau lien à l'article
                article.append(newLink);
                const link = document.querySelector('#news article:last-child a');
                link.textContent = data.articles[o].source.name;
                link.setAttribute('href', data.articles[o].url);

                console.log(article);
                }else{
                    return
                }
            }
        })
}