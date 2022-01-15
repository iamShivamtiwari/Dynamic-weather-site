const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 3000;

const static_path = path.join(__dirname,"../public");   
const template_path = path.join(__dirname,"../templates/views");   
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path)); // this is also the one the that is reading the css folder along with other static files.

app.get("",(req,res)=>{
res.render('index');
});

app.get("/About",(req,res)=>{
res.render('about');
});

app.get("/Weather",(req,res)=>{
res.render('weather');
});

app.get("*",(req,res)=>{
res.render('404error',{
    errorMsg : 'Opps! Page Not Found.'
});
res.status(404);
}); // this is a special operator which is to give a value for all the searches other than you writtened here.

app.listen(port, ()=>{
    console.log(`The weather app is listening on the port ${port}`);
});