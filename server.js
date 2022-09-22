const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewares;
app.use(express.json());
app.use(morgan('dev'));

app.use('/products', require('./routes/productsRoutes'));

const port = 3009;

app.listen(port, () =>
  console.log(`Server is listening at http://127.0.0.1:${port}`)
);
