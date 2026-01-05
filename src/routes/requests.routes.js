const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const requestsControllers = require('../controllers/requests.controllers');

router.post('/', auth, requestsControllers.createRequest);
router.put('/:id', auth, requestsControllers.updateRequest);

module.exports = router;
