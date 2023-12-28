var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Mini Message Board",
    messages_pug: messages,
   });
});

router.get('/new', function(req,res,next){
  res.render('form', { 
    title: "NEW",
    
   });
})

router.post('/new', function(req,res,next){
  // const {message, authors_name} = req.body;
  const message = req.body.message;
  const authors_name = req.body.authors_name;
  messages.push({text:message, user:authors_name, added:new Date()});
  res.redirect('/');
})

module.exports = router;
