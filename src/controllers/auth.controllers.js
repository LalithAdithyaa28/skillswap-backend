const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO users(name,email,password) VALUES($1,$2,$3)',
      [name, email, hashed]
    );

    res.json({ message: 'User registered' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE email=$1',
      [email]
    );

    if (result.rows.length === 0)
      return res.status(400).json({ error: 'User not found' });

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);

    if (!valid)
      return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
};
