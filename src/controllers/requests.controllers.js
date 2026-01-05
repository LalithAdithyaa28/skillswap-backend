const pool = require('../db');

exports.createRequest = async (req, res) => {
  const { skill_id } = req.body;
  await pool.query(
    'INSERT INTO requests(skill_id, requester_id) VALUES($1,$2)',
    [skill_id, req.user.id]
  );
  res.json({ message: 'Request created' });
};

exports.updateRequest = async (req, res) => {
  const { status } = req.body;
  await pool.query(
    'UPDATE requests SET status=$1 WHERE id=$2',
    [status, req.params.id]
  );
  res.json({ message: 'Request updated' });
};
