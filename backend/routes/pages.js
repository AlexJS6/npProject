const express = require('express');
const router = express.Router();

const pageCtrl = require('../controllers/pages');

router.get('/', pageCtrl.getIndex);
router.get('/index', pageCtrl.getIndex);
router.get('/registration', pageCtrl.getRegistration);
router.get('/signin', pageCtrl.getSignIn);
router.get('/flight', pageCtrl.getFlight)

module.exports = router;