const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.baseUrl)
  res.render('index', { title: 'Caritá' });
});

module.exports = router;
