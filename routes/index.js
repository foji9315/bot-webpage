const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'BOT | Bot Anti-Scam' });
});

router.get('/donate', (req, res) => {
  res.render('donate', { title: 'BOT | Donate' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'BOT | Contact' });
});

router.get('/docs', (req, res) => {
  res.render('docs', { title: 'BOT | Documents' });
});


module.exports = router;
