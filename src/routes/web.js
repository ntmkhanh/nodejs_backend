const express = require('express')
const router = express.Router()
const {getHomepage, getABC} = require('../controllers/homepageController')
router.get('/', getHomepage)

router.get('/abc', getABC)

module.exports = router