const express = require('express');
const router = express.Router();
const { asyncErrorHandler, errorOrNext } = require("@ptolemy2002/express-utils");

/* GET home page. */
router.get('/', function(_, res, _) {
  res.render('index', { title: 'Express Utils Test' });
});

router.get('/async-error', asyncErrorHandler(asyncErrorHandler(async function(_, res, _) {
  throw new Error("This is an async error");
})));

router.get('/error', () => {
  throw new Error("This is a sync error");
}, errorOrNext({status: 500, message: "This is an error"}));

module.exports = router;
