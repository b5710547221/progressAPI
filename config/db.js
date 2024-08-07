const { Pool } = require('pg');

const pool = new Pool({
  user: 'admindbpgsql',
  password: 'my_password_1',
  host: 'db-multi-purpose.postgres.database.azure.com',
  port: 5432, // default Postgres port
  database: 'samphran',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};