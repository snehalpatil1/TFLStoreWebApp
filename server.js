//SOC
const express = require('express');
var path=require('path');
var app = express();

//configure Express Middleware
//HTTP middlware configuration
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req, res){
    res.sendFile("index.html");
});



//Router configuration
var routes=require("./router");
routes(app);            // going invoke module Router from router.js

//Listen Mode
app.listen(9898);
console.log("Express TFLStore App is liestening on port 9898");