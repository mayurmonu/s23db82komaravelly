var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lion', { title: 'Search Results lion' });
});
var express = require('express');
const lion_controlers= require('../controllers/lion');
var router = express.Router();
/* GET lions */
router.get('/', lion_controlers.lion_view_all_Page );
module.exports = router;