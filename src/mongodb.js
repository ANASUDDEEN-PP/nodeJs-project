// import mongoos in this program
const mongoose = require("mongoose");
// set url of mongodb
mongoose.connect("mongodb://localhost:27017/Anas")
// check connection is okey or not
.then(() => {
    console.log("mongo Connected");
})
.catch(() => {
    console.log("connection Failed");
})
// import the data from login,hbs forms
const loginSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})
// set it on the collection
const collection = new mongoose.model("Collection1", loginSchema)
// export the collection module
module.exports = collection