const express = require('express');
const {
  getAllProducts,
  createProducts,
  deleteAllProducts,
} = require('../controllers/productsController');

const router = express.Router();

router
  .route('/')
  .get(getAllProducts)
  .post(createProducts)
  .delete(deleteAllProducts);

module.exports = router;
