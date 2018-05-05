const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',()=>{
    return (new Date()).getFullYear()
  //return 'test'
})

app.use((req,res,next)=>{
  var now = (new Date()).toString();
  console.log(`${now}:${req.method}:${req.url}`);
  next()
})
// handler for http get request

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'welcome To my Website',
    currentYear:(new Date()).getFullYear()
  });
  //  res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name:'Gautam',
  //   likes:['biking','hiking']
  // })
})

app.get('/about',(req,res)=>{
  //res.send('About Page.')
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear: (new Date()).getFullYear()
  })

})
//app.listen(3000);
app.listen(3000,()=>{
  console.log('server is up on port 3000');
});
