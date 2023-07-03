const express = require("express");
const path = require('path');
const fast2sms = require("fast-two-sms");
const bodyParser = require('body-parser');

const app = express();
const hbs = require('hbs');

const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewPath);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(publicDirectoryPath));

app.get("/",function(req,res){
    res.render("home")
})

app.post("/api/send_mail",async function(req,res){
    try{
        var result = await fast2sms.sendMessage({
            authorization:
            "GLAOJwXa9R1jCvzt3nKfP4x8FpyiVZbu206eEQlhMrqImBdsNoioehCypUMnuXkF2BEWa8lHJLxZVTYm",
            message: req.body.message,
            numbers: [req.body.number]
        });
        res.status(200).send(result);
    }catch(e){
        res.status(500).send("internal server error");
    }

})

app.listen(3000, function(){
    console.log("server is up on port 3000")
})