const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const skillsControllers = require('../controllers/skills.controllers');

router.post('/', auth, skillsControllers.createSkill);
router.get('/', skillsControllers.getSkills);

module.exports = router;
