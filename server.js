/** ***********************************
 * Getting Started
 ************************************ */
const express = require('express');

/** **********************************
 * Constants and Variables
 ************************************ */
const app = express();
const port = 3000;
const hondenmaatjes = [
  {
    id: 1,
    slug: 'thirza-bommel',
    name: 'Thirza Bommel',
    years: ['23', '3'],
    info: 'single postieve meid die van praten houdt',
    zoekt: 'hondenmaatje die af en toe lekker over koetjes en kalfjes wil praten',
  },
  {
    id: 2,
    slug: 'roel-thunder',
    name: 'Roel Thunder',
    years: ['27', '2'],
    info: 'Ik ben een hondenmaatje met veel energie net als mijn geweldige hond, dit moeten wij af en toe kwijt',
    zoekt: 'hondenmaatje waar we mee kunnen ravotten',
  },
  {
    id: 3,
    slug: 'maria-asha',
    name: 'Maria Asha',
    years: ['45', '10'],
    info: 'huisvrouw met twee kinderen die naar school gaan',
    zoekt: 'ouder hondenmaatje om tusssen de middag mee te kletsen',
  },
  {
    id: 4,
    slug: 'joke-kaya',
    name: 'Joke kaya',
    years: ['50', '4'],
    info: 'ik ben sportief en hou van wandelen',
    zoekt: 'hondenmaatje om een flink eind mee te wandelen en kletsen',
  },
  {
    id: 5,
    slug: 'lisa-chick',
    name: 'Lisa Chick',
    years: ['30', '8'],
    info: 'Ik ben een echt meisje-meisje, en mijn kleine chick ook',
    zoekt: 'hondenmaatje met klein schattig hondje die de perfecte match is voor chick en mij',
  },
];

/***************************************
 * Middleware***************************/
app.use(express.static('public'))
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
  res.render('overzicht');
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



/*****************************************
 * 404****************************** */
app.use( (req, res) =>{
  res.status(404).send('Error 404: file not found')
})  

/** *********************************
 * Start Webserver
 *********************************** */
app.listen(port, () => {
  console.log(`web server  running on http://localhost:${port}`);
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