
console.log("starting app")


const express = require("express")

const path = require("path")

const app = express()


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")




app.get('/', function(req, res){
    res.render('index', {
        title: "The best cohort",
        
    })
})


app.get('/about', function(req, res){
    res.render('about',)
})


app.listen(3001, function() {
    console.log('server started on port 3001....')
})





