const pool = require('../db');

exports.createSkill = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    await pool.query(
      'INSERT INTO skills(user_id, title, description, category) VALUES($1,$2,$3,$4)',
      [req.user.id, title, description, category]
    );

    res.json({ message: 'Skill created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create skill' });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM skills');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
};
