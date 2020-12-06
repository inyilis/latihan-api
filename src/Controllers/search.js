const search = {};
const model = require('../Models/search');
const respon = require('../Helpers/respon');

search.get = async (req, res) => {
  try {
    const result = await model.get(req.query);
    return respon(res, 200, result);
  } catch (error) {
    return respon(res, 500, error);
  }
};

module.exports = search;
