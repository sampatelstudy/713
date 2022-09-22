const products = require('../products');

exports.getAllProducts = async (req, res) => {
  try {
    res.status(200).json({
      products,
    });
  } catch (err) {
    console.log(err);
    return;
  }
};

exports.createProducts = async (req, res) => {
  try {
    const { product, price, category } = req.body;
    const newProduct = {
      product,
      price,
      category,
    };

    products.push(newProduct);
    res.status(200).json({
      message: 'Prduct Created Successfully',
    });
  } catch (error) {
    console.log(err);
    return;
  }
};

exports.deleteAllProducts = async (req, res) => {
  try {
    products.splice(0, products.length);
    res.status(200).json({
      message: 'Products Deleted Successfully',
    });
  } catch (error) {}
};
