const express = require("express")
// const { listen } = require("express/lib/application")
const req = require("express/lib/request")
const app = express()
const path = require("path")
const hbs = require("hbs")
// const async = require("hbs/lib/async")
const collection = require("./mongodb")

// to import and set the path of templates
const templatePath = path.join(__dirname, '../templates')

app.use(express.json())
// set search engine is hbs
app.set("view engine", "hbs")
// set templatePath here
app.set("views", templatePath)

// set login.hbs as a default page
app.get("/", (req, res) =>{
    res.render("login");
});

// set signup as a signup.hbs
app.get("/signup", (req, res) =>{
    res.render("signup");
});


app.post("/signup", (req,res) =>{
    const data ={
        name : req.body.name,
        password : req.body.password
    }
    // await collection.insertMany([data])
    try {
        const result = await collection.insertMany([data]);
        // Assuming you have a "home" view defined in your templates
        res.render("home");
    } catch (error) {
        console.error(error);
        // Handle errors here and send an appropriate response
        res.status(500).send("Internal server error");
    }
});

// to check the connection is running or not
app.listen(3001, () => console.log("Port Running Successfully at 3001"));