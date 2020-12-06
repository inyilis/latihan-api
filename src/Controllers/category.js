const category = {};
const model = require('../Models/category');
const respon = require('../Helpers/respon');

category.get = async (req, res) => {
  try {
    const result = await model.get();
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

category.add = async (req, res) => {
  try {
    const result = await model.addCategory(req.body);
    return respon(res, 201, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

category.update = async (req, res) => {
  try {
    const result = await model.updateCategory(req.body);
    return respon(res, 201, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

category.del = async (req, res) => {
  try {
    const result = await model.delCategory(req.params.id);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

module.exports = category;
