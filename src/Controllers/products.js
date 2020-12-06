const products = {};
const model = require('../Models/products');
const respon = require('../Helpers/respon');

products.get = async (req, res) => {
  try {
    const result = await model.get();
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

products.add = async (req, res) => {
  try {
    const result = await model.addProduct(req.body);
    return respon(res, 201, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

products.update = async (req, res) => {
  try {
    const result = await model.updateProduct(req.body);
    return respon(res, 201, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

products.del = async (req, res) => {
  try {
    const result = await model.delProduct(req.params.id);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

module.exports = products;
