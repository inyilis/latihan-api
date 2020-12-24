const products = {};
const model = require('../Models/products');
const respon = require('../Helpers/respon');
// const cloudUpload = require('../Helpers/cloudUpload');
const { redisdb } = require('../Configs/redis');
const logger = require('../Helpers/logger');

products.get = async (req, res) => {
  try {
    const result = await model.get();
    // const saveRedis = JSON.stringify(result);
    // console.log('Data Dari PostgreSQL');
    // redisdb.setex('products', 60, saveRedis);
    return respon(res, 200, result);
  } catch (error) {
    logger.error(error);
    return respon(res, 500, error);
  }
};

products.add = async (req, res) => {
  try {
    // if (req.file === undefined) {
    //   logger.error('Image harus disi');
    //   return respon(res, 500, { msg: 'Image harus disi' });
    // }
    if (Object.keys(req.body).length !== 4 || req.body.nama === '' || req.body.nama === null || req.body.url_img === '' || req.body.url_img === null) {
      logger.error('Data tidak lengkap, silahkan isi kembali !');
      const result = { msg: 'Data tidak lengkap, silahkan isi kembali !' };
      return respon(res, 401, result);
    }

    // const urlimg = await cloudUpload(req.file.path);
    // const product = {
    //   nama: req.body.nama,
    //   harga: req.body.harga,
    //   url_img: urlimg,
    //   kategori_id: req.body.kategori_id,
    // };

    const result = await model.addProduct(req.body);
    redisdb.del('products');
    return respon(res, 201, result);
  } catch (error) {
    logger.error(error);
    return respon(res, 500, error);
  }
};

products.update = async (req, res) => {
  try {
    // if (req.file === undefined) {
    //   logger.error('Image harus disi');
    //   return respon(res, 500, { msg: 'Image harus disi' });
    // }
    if (Object.keys(req.body).length !== 5 || req.body.nama === '' || req.body.nama === null || req.body.url_img === '' || req.body.url_img === null) {
      logger.error('Data tidak lengkap, silahkan isi kembali !');
      const result = { msg: 'Data tidak lengkap, silahkan isi kembali !' };
      return respon(res, 401, result);
    }

    // const urlimg = await cloudUpload(req.file.path);
    // const product = {
    //   id: req.body.id,
    //   nama: req.body.nama,
    //   harga: req.body.harga,
    //   url_img: urlimg,
    //   kategori_id: req.body.kategori_id,
    // };
    const result = await model.updateProduct(req.body);
    redisdb.del('products');
    return respon(res, 201, result);
  } catch (error) {
    logger.error(error);
    return respon(res, 500, error);
  }
};

products.del = async (req, res) => {
  try {
    const result = await model.delProduct(req.params.id);
    redisdb.del('products');
    return respon(res, 200, result);
  } catch (error) {
    logger.error(error);
    return respon(res, 500, error);
  }
};

module.exports = products;
