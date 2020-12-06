const db = require('../Configs/db');

const search = {};

search.get = (data) => {
  const Query = `
        SELECT public.products.id, public.products.nama, public.products.harga, public.category.tipe AS "kategori"
        FROM public.products 
        JOIN public.category ON public.products.kategori_id = public.category.id
        `;

  let queryData = '';

  if (data.nama === '1' || data.kategori === '1' || data.terbaru === '1' || data.harga === '1') {
    queryData = 'ORDER BY';
    if (data.nama === '1') {
      queryData += ' public.products.nama ASC';
    }
    if (data.kategori === '1') {
      if (data.nama === '1') {
        queryData += ', tipe ASC';
      } else {
        queryData += ' tipe ASC';
      }
    }
    if (data.terbaru === '1') {
      if (data.nama === '1' || data.kategori === '1') {
        queryData += ', public.products.id DESC';
      } else {
        queryData += ' public.products.id DESC';
      }
    }
    if (data.harga === '1') {
      if (data.nama === '1' || data.kategori === '1' || data.terbaru === '1') {
        queryData += ', harga DESC';
      } else {
        queryData += ' harga DESC';
      }
    }
  } else if (Object.keys(data).length === 0) {
    queryData = '';
  } else {
    queryData = `WHERE nama LIKE '%${data.nama}%'`;
  }

  // console.log(`${Query}${queryData}`);

  return new Promise((resolve, reject) => {
    db.query(`${Query}${queryData}`)
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
};

module.exports = search;
