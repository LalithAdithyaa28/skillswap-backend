const pool = require('./src/db');

pool.query('SELECT 1')
  .then(() => {
    console.log('DB Connected');
    process.exit(0);
  })
  .catch(err => {
    console.error('DB Error:', err);
    process.exit(1);
  });
