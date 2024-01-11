const express = require('express')
const router = express.Router()
const {getHomepage, getABC, postNewUser, getAddUserPage} = require('../controllers/homepageController')
router.get('/', getHomepage)

router.get('/abc', getABC)
router.post('/create_user', postNewUser)
router.get('/create', getAddUserPage)

module.exports = router