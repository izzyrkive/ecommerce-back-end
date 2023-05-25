const express = require('express');
const routes = require('./routes');
const sequelize = require('../config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const { Product, Category, ProductTag, Tag } = require('./develop/models');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Models synced with database.');
  })
  .catch((error) => {
    console.error('Unable to sync models:', error);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
