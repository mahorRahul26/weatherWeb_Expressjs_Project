const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");
const PORT = 8000 


// public static path

const staticPath = path.join(__dirname,"../public");
const templatesPath = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");




app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set("views",templatesPath);
hbs.registerPartials(partial_path);




// Routing
app.get("/",(req, res)=>{
    
    res.render("index")
})

app.get("/about",(req, res)=>{
    // res.send("wellCome in our new about page");
    res.render('about')
})

app.get("/weather",(req, res)=>{
    res.render('weather');
})

app.get("*",(req, res)=>{
    res.render("404error",{
        errorMsg : "Opps! Page Not Found"
    });
})

app.listen(PORT,()=>{
    console.log("listening port 8000");
});