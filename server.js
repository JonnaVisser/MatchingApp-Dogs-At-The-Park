/*************************************
 * Getting Started
 *************************************/
const express = require('express')

/************************************
 * Constants and Variables
 *************************************/
const app = express();
const port = 8080;
const hondenmaatjes= [
    {
        "id": 1,
        "slug": "thirza-bommel",
        "name": "Thirza Bommel",
        "years": ["23", "3"],
        "info": "single postieve meid die van praten houdt",
        "zoekt": "hondenmaatje die af en toe lekker over koetjes en kalfjes wil praten"
    },
    {
        "id": 2,
        "slug": "roel-thunder",
        "name": "Roel Thunder",
        "years": ["27", "2"],
        "info": "Ik ben een hondenmaatje met veel energie net als mijn geweldige hond, dit moeten wij af en toe kwijt",
        "zoekt": "hondenmaatje waar we mee kunnen ravotten"
    },
    {
        "id": 3,
        "slug": "maria-asha",
        "name": "Maria Asha",
        "years": ["45", "10"],
        "info": "huisvrouw met twee kinderen die naar school gaan",
        "zoekt": "ouder hondenmaatje om tusssen de middag mee te kletsen"
    },
    {
        "id": 4,
        "slug": "joke-kaya",
        "name": "Joke kaya",
        "years": ["50", "4"],
        "info": "ik ben sportief en hou van wandelen",
        "zoekt": "hondenmaatje om een flink eind mee te wandelen en kletsen"
    },
    {
        "id": 5,
        "slug": "lisa-chick",
        "name": "Lisa Chick",
        "years": ["30", "8"],
        "info": "Ik ben een echt meisje-meisje, en mijn kleine chick ook",
        "zoekt": "hondenmaatje met klein schattig hondje die de perfecte match is voor chick en mij"
    }
]

/************************************
 * Routes
 *************************************/
app.get('/', (req, res) => {
    let doc = '<!doctype html>';
    doc += '<title>Hondenmaatjes</title>'
    doc += '<h1>Hondenmaatjes</h1>'

    hondenmaatjes.forEach(hondenmaatje => {
        doc += "<section>";
        doc += `<h2>${hondenmaatje.name}</h2>`;
        doc += "<h3>years:</h3>";
        doc += `<h3>${hondenmaatje.info}</h3>`;
        doc += "<ul>";
        hondenmaatjes.years.forEach(years =>{
            doc += `<li>${years}</li>`;
        });
        doc += "</ul>";
        doc += `<a href="/hondenmaatjes/${hondenmaatjes.id}/${hondenmaatjes.slug}">more info</a>`
        doc += "</section>";
    });
  res.send(doc);
})

app.get('/hondenmaatjes/:id/:slug', (req, res) => {

})

/*variabele
app.get('/name/:name', (req, res) => {
    res.send(`hello ${req.params.name}`)
  })*/

































/***********************************
 * Start Webserver
 ************************************/
 app.listen(port, () => {
    console.log (`web server  running on http://localhost:${port}`)
    })