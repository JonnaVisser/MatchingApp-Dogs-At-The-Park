/** ***********************************
 * Getting Started
 ************************************ */
const express = require('express');
require('dotenv').config()
/** **********************************
 * Constants and Variables
 ************************************ */
const app = express();

const hondenmaatjes = [
  {
    id: 1,
    slug: 'maria-asha',
    name: 'Maria Asha',
    years: ['35', '1'],
    park: 'Vondelpark',
    steekwoorden: 'sportief, wandelen, kilometers, kletsen',
  },
  {
    id: 2,
    slug: 'roel-thunder',
    name: 'Roel Thunder',
    years: ['27', '2'],
    park: 'Oosterpark',
    steekwoorden: 'adhd, energie, ravotten',
  },
  {
    id: 3,
    slug: 'thirza-bommel',
    name: 'Thirza Bommel',
    years: ['50', '3'],
    park: 'Vondelpark',
    steekwoorden: 'huisvrouw, kinderen, ouders, kletsen',
  },
  {
    id: 4,
    slug: 'joke-kaya',
    name: 'Joke kaya',
    years: ['23', '5'],
    park: 'Westerpark',
    steekwoorden: 'single, positief, nonsense, praten',
  },
  {
    id: 5,
    slug: 'rayza-boef',
    name: 'Rayza Boef',
    years: ['33', '7'],
    park: 'Westerpark',
    steekwoorden: 'single, geniet, dromerig, chill',
  },
];

/***************************************
 * Middleware***************************/
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/html', express.static(__dirname + 'public/html'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

/** **********************************
 * Routes
 ************************************ */
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
res.render('index');
});

app.get('/overzicht', (req, res) => {

  if(req.query && req.query.park){
    res.render('overzicht2', {hondenmaatjes:hondenmaatjes.filter(hondenmaatje => hondenmaatje.park.toLowerCase()== req.query.park.toLowerCase())});
  }
  else {
    res.render('overzicht2', {hondenmaatjes:hondenmaatjes});
  }
});

app.get ('/blokjesoverzicht', (req, res) => {
  res.render('includes/blokjesoverzicht',{hondenmaatjes:hondenmaatjes});
});

app.get('/detailpagina-maria-asha', (req, res) => {
  res.render('detailpagina-maria-asha');
  });

app.get('/detailpagina-roel-thunder', (req, res) => {
  res.render('detailpagina-roel-thunder');
  });

app.get('/detailpagina-thirza-bommel', (req, res) => {
  res.render('detailpagina-thirza-bommel');
  });

app.get('/detailpagina-joke-kaya', (req, res) => {
  res.render('detailpagina-joke-kaya');
  });

app.get('/detailpagina-rayza-boef', (req, res) => {
  res.render('detailpagina-rayza-boef');
  });

app.get('/formulier', (req, res) => {
  //TODO: Get data from database to pass along to our template
  res.render('formulier', {honden:[{id: 1, naam:'chick', leeftijd:1}]}); //<<this data should come from the database!!
  });

app.post('/formulier', (req, res) => {
  //example how to get data from your post request
  const name = req.body.naam;
  console.log(name);
  console.log(req.body);

  //TODO: you 'logic' goes here, preferably in separate functions.
  //HINT: you can use the "flow" from your POST-body to determine the action (create/update/delete), e.g.: req.body.flow == 'toevoegen' => means it's an "add to database"-action
  if(req.body.flow == "verwijderen")
  {
    //delete dog, unwoof the woof :)
  }
  else if(req.body.flow == "toevoegen")
  {
    //add new dog to databsae, moooooor woofs :)
  }
  else if(req.body.flow == "bijwerken")
  {
    //update existing dog, woof-improvement :)
  }

  //redirect back to formulier with get to update on-screen info
  res.redirect('/formulier');
  });



/*****************************************
 * 404****************************** */
app.use( (req, res) =>{
  res.status(404).send('Error 404: file not found')
})  

/** *********************************
 * Start Webserver
 *********************************** */
app.listen(process.env.PORT, () => {
  console.log(`web server  running on http://localhost:${process.env.PORT}`);
});





  // let doc = '<!doctype html>';
  // doc += '<title>Hondenmaatjes</title>';
  // doc += '<h1>Hondenmaatjes</h1>';

  // console.dir(hondenmaatjes);

  // hondenmaatjes.forEach((hondenmaatje) => {
  //   doc += '<section>';
  //   doc += `<h2>${hondenmaatje.name}</h2>`;
  //   doc += '<h3>years:</h3>';
  //   doc += `<h3>${hondenmaatje.info}</h3>`;
  //   doc += '<ul>';
  //   hondenmaatje.years.forEach((years) => {
  //     doc += `<li>${years}</li>`;
  //   });
  //   doc += '</ul>';
  //   doc += `<a href="/hondenmaatjes/${hondenmaatje.id}/${hondenmaatje.slug}">more info</a>`;
  //   doc += '</section>';
  // });
  // res.send(doc);

  // app.get('/hondenmaatjes/:id/:slug', (req, res) => {
//   const id = req.params.id
//   const hondenmaatje = hondenmaatjes.find(element => element.id == id)

// });

/* variabele
app.get('/name/:name', (req, res) => {
    res.send(`hello ${req.params.name}`)
  }) */