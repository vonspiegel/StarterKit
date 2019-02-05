const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Product.create(products);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
