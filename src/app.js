const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
console.log("Auth routes:", authRoutes);
const skillsRoutes = require('./routes/skills.routes');
const requestsRoutes = require('./routes/requests.routes');

const app = express();
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/requests', requestsRoutes);

app.get('/', (req, res) => {
  res.send('SkillSwap API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
