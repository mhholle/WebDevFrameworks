const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');

//start server with: npx nodemon index.js

app.use(bodyParser.json());

let products = [{
  id: uuidv4(),
  manufacturer: 'Hifiman',
  model: 'He400',
  price: '500'
}];

let users = [{
  id: uuidv4(),
  name: 'Roope Ankaa',
  address: 'Rahasäiliö 1'
}];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Get all products
app.get('/products', (req, res) => {
    res.json(products);
})

//Get a single product
app.get('/products/:id', (req, res) => {
    console.log(req.params);
    const result = products.find(product => product.id === req.params.id);
    res.json(result);
})

//Search product based on manufacturer/model/price
app.get('/products/search/:manufacturer', (req, res) => {

  const filteredProducts = products.filter(product => {
    if (req.params.manufacturer === product.manufacturer) {
      return true;
    }
    else {
      return false;
    }
  });
  console.log(req.params);
  res.json(filteredProducts);
});

//Create a new product
app.post('/products', (req, res) => {
    console.log("creating a new product");
    console.log(req.body);

    products.push({
      id: uuidv4(),
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      price: req.body.price
    })

    console.log('Product brand ' + req.body.manufacturer);
    res.send("Created a new product");
})

//Delete a product
app.delete('/products/:id', (req, res) => {
  const result = products.findIndex(product => product.id === req.params.id);
  if (result !== -1) {
    products.splice(result, 1);
    res.send('Delete succeeded');
  } else {
    res.send('No such product found');
  }
})

//Delete all products
app.delete('/products', (req, res) => {
  res.send('Delete all products');
  products.splice(0, products.length);
})

//Modify a product
app.put('/products/:id', (req, res) => {
  const result = products.findIndex(product => product.id === req.params.id);
  if (result !== -1) {
    products.splice(result, 1, {id: req.params.id, ...req.body});
    res.send('Modifying succeeded');
  } else {
    res.send('No such product found');
  }
})


//Get all users
app.get('/users', (req, res) => {
  res.json(users);
})

//Get a single user
app.get('/users/:id', (req, res) => {
  console.log(req.params);
  const result = users.find(user => user.id === req.params.id);
  res.json(result);
})

//Create a new user
app.post('/users', (req, res) => {
  console.log("creating a user");
  console.log(req.body);

  users.push({
    id: uuidv4(),
    name: req.body.name,
    address: req.body.address
  })
  res.send("Created a new user");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})