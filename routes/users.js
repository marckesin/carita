const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  // router.get('/:test', (req, res) => {
  // console.log(req.params.test)
  // console.log(req.query)
  res.status(200);
  res.render('users', { title: 'Users' });

});

module.exports = router;
