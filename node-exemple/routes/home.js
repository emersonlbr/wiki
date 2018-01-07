const express = require('express'),
      router  = express.Router();


router.get('/', (req, res) => {
  res.render('home');
});


router.get('*', (req, res) => {
  res.send('seems like you are lost');
});

module.exports = router;