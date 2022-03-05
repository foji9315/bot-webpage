const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Yoimiya Bot | Bot Anti-Scam' });
});

router.get('/invite-me', (req, res) => {
  res.render('invite-me', { title: 'Yoimiya Bot | Invite' });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Yoimiya Bot | Dashboard' });
});

router.get('/donate', (req, res) => {
  res.render('donate', { title: 'Yoimiya Bot | Donate' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Yoimiya Bot | Contact' });
});


router.get('/docs', (req, res) => {
  res.render('docs', { title: 'Yoimiya Bot | Documents' });
});


module.exports = router;
