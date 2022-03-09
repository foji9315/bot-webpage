const express = require('express'),
  router = express.Router(),
  emailer = require('../lib/emailLib');

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

router.post('/emails', async (req, res) => {
  console.log(req.body);
  let info = req.body;
  try {
    let response = await emailer.send(
      'contactyoimiyabot@gmail.com',
      info.email,
      `New Contact Form ${info.name}`,
      info.text
    );
    console.log(response);
  } catch (err) {
    console.log('error sending message');
    console.log(err);
  } finally {
    res.send('ok');
  }
});


module.exports = router;
