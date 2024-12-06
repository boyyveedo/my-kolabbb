const express = require('express');
const router = express.Router();
const { subscribe } = require('../controller/subscribeController')



router.route('/waitlist').post(subscribe)



module.exports = router;
