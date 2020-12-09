const db = require('../Configs/db');

const search = {};

search.get = (query, data) => new Promise((resolve, reject) => {
  db.query(`${query}${data}`)
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

module.exports = search;
