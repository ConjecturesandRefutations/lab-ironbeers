const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use("/public", express.static(path.join(__dirname, '/public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

//Route for Homepage
app.get('/', (req, res) => {
  res.render('index');
});


//Route for Beers Page
app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beersFromApi => {
      res.render('beers', { beers: beersFromApi });
    })
    .catch(error => console.log(error));
});

  

//Route for Random Beers Page
app.get('/randombeer', (req, res) => {
  punkAPI
  .getRandom()
  .then(randomBeer => {
  res.render('randomBeer', {beer: randomBeer[0]});
  })
  .catch(error => console.log(error));
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
