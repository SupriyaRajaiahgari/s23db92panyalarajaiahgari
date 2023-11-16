var express = require('express');
var router = express.Router();
const books_controllers = require('../controllers/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: 'Search Result Books' });
});

/* GET detail books page */
router.get('/detail', books_controllers.books_view_one_Page);

/* GET create books page */
router.get('/create', books_controllers.books_create_Page);

/* GET create update page */
router.get('/update', books_controllers.books_update_Page);

/* GET delete books page */
router.get('/delete', books_controllers.books_delete_Page);



module.exports = router;

