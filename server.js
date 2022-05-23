/** ***********************************
 * Getting Started
 ************************************ */
const express = require('express');
const slug = require('slug');
const arrayify = require('array-back');
const dotenv = require('dotenv').config();
const {MongoClient} = require('mongodb');
const {ObjectId} = require('mongodb');
/** **********************************
 * Constants and Variables
 ************************************ */
const app = express();
let db = null;
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

app.get('/overzicht', async (req, res) => {
  if(req.query && req.query.park) {
  const query = {park:req.query.park};



  const hondenmaatjes = await db.collection("hondenmaatjes").find(query).toArray();
  res.render('overzicht2', {hondenmaatjes:hondenmaatjes});
}
  else {
    const hondenmaatjes = await db.collection("hondenmaatjes").find({},{}).toArray();
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

app.get('/formulier', async (req, res) => {
  const query = {};
  const honden = await db.collection("honden").find(query).toArray();
  res.render('formulier', {honden:honden});
  });

app.post('/formulier', async (req, res) => {
  const filter =  {_id:new ObjectId(req.body.id)};
  if(req.body.flow == "verwijderen")
  {
    //delete dog, unwoof the woof :)
    await db.collection("honden").deleteOne(filter);
  }
  else if(req.body.flow == "toevoegen")
  {
    //add new dog to databsae, moooooor woofs :)
    let toevoegen = {
      naam: req.body.naam,
      leeftijd: req.body.leeftijd
    };
    await db.collection("honden").insertOne(toevoegen);
  }
  else if(req.body.flow == "bijwerken")
  {
    //update existing dog, woof-improvement :)
    const updateDoc = {
      $set: {
        naam: req.body.naam,
        leeftijd: req.body.leeftijd
      }
    };
    await db.collection("honden").updateOne(filter, updateDoc, { upsert: false });
  }
  //redirect back to formulier with get to update on-screen info
  res.redirect('/formulier');
  });
/*****************************************
 * 404****************************** */
app.use(function (req, res) {
  res.status(404).render('404', {title:"Error 404: file not found"});
});

/*****************************************************
 * Connect to database
 ****************************************************/
 async function connectDB () {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
      await client.connect();
      db = client.db (process.env.DB_NAME);
  } catch (error) {
      throw error;
  } 
  
}
/** *********************************
 * Start Webserver
 *********************************** */
app.listen(process.env.PORT, () => {
  console.log(`web server  running on http://localhost:${process.env.PORT}`);
  console.log(process.env.TESTVAR)
  connectDB (). then(console.log("we have a connection"))
});
