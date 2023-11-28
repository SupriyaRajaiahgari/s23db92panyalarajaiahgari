var express = require('express');
var router = express.Router();
const books_controllers = require('../controllers/books');
const passport = require('passport');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: 'Search Result Books' });
});

/* GET detail books page */
router.get('/detail',secured, books_controllers.books_view_one_Page);

/* GET create books page */
router.get('/create',secured, books_controllers.books_create_Page);

/* GET create update page */
router.get('/update',secured, books_controllers.books_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
  });

/* GET delete books page */
router.get('/delete',secured, books_controllers.books_delete_Page);



module.exports = router;

