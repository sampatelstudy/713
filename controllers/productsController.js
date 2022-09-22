const fs = require('fs');

exports.getAllProducts = async (req, res) => {
  try {
    const rawData = fs.readFileSync('./products.json');
    const products = JSON.parse(rawData);
    res.status(200).json({
      products,
    });
  } catch (err) {
    console.log(err);
    return;
  }
};
