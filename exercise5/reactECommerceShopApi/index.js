const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 4000
const productData = require('./data.json')
const cors = require('cors');

//Start server using: npx nodemon index.js

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
    res.json(productData);
})

app.post('/products', (req, res) => {
    let lastId = productData.items[productData.items.length - 1].id;
    let newObj = {id: ++lastId, ...req.body};
    productData.items.push(newObj);
    //res.json(productData);
    res.json(newObj);
})

app.delete('/products/:id', (req, res) => {
    
    let index = productData.items.findIndex(i => i.id === parseInt(req.params.id));
    console.log(index);
    if (index !== -1) {
    productData.items.splice(index, 1);
    res.send('Delete succeeded');
  } else {
    res.send('No such product found');
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})