const pool = require('../../utils/db');

const selectAll = async () => {
  const result = await pool.query('SELECT * FROM  client');
  return result[0];
};
const insertClient = async ({ name, lastname, email, age, dni, password }) => {
  const [result] = await pool.query(
    'INSERT INTO client (dni,name,lastname,email, age, password) VALUES(?,?,?,?,?,?)',
    [dni, name, lastname, email, age, password]
  );
  if (result.affectedRows === 0) {
    return -1;
  }
  return result.insertId; //1,2,3,4
};
const selectById = async (id) => {
  const result = await pool.query('SELECT * FROM  client where idClient = ?', [
    id,
  ]);
  return result[0];
};
const selectByName = async (name) => {
  const result = await pool.query('SELECT * FROM  client where name = ?', [
    name,
  ]);
  console.log(result);
  return result[0];
};

const selectByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM  client where email = ?', [
    email,
  ]);
  return result[0];
};

const deleteClient = async (id) => {
  const [result] = await pool.query('DELETE FROM client WHERE idclient = ?', [
    id,
  ]);
  return result;
};
module.exports = {
  selectAll,
  insertClient,
  selectById,
  selectByName,
  selectByEmail,
  deleteClient,
};
