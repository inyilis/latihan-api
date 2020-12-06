const db = require('../Configs/db');

const products = {};

products.get = () => new Promise((resolve, reject) => {
  db.query('SELECT * FROM public.products ORDER BY id ASC')
    .then((res) => {
      if (res.rows.length === 0) {
        resolve({ msg: 'Data Kosong' });
      } else {
        resolve(res.rows);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

products.addProduct = (data) => new Promise((resolve, reject) => {
  db.query(`INSERT INTO public.products(nama, harga, stok, kategori_id)
                    VALUES ('${data.nama}', ${data.harga}, ${data.stok}, ${data.kategori_id})`)
    .then(() => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

products.updateProduct = (data) => new Promise((resolve, reject) => {
  db.query(`UPDATE public.products SET nama='${data.nama}', harga=${data.harga}, stok=${data.stok}, kategori_id=${data.kategori_id} WHERE id = ${data.id}`)
    .then(() => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

products.delProduct = (id) => new Promise((resolve, reject) => {
  db.query(`DELETE FROM public.products WHERE id = ${id}`)
    .then(() => {
      resolve('Deleted');
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = products;
