const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    

    

res.render("pages/index", {
    
    }); 
})

app.use(express.static(__dirname + '/publico'));


app.get("/about", function (req, res) {
    res.render("pages/about");    //depois cria uma pagina com o nome de about.js

})

app.get("/contato", function (req, res) {
    res.render("pages/contato")
})

app.get("/camisa", function (req, res) {
    res.render("pages/camisa")
})

app.get("/calcao", function (req, res) {
    res.render("pages/calcao")
})

app.get("/acessorio", function (req, res) {
    res.render("pages/acessorio")
})






app.listen(8080)
console.log("testannnnndoo")