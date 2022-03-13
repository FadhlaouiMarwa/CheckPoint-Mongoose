//importation express
const express=require("express")

//creation de l'instance
const app=express()
//importation dotenv
require("dotenv").config()
//Connect DataBase
const connectDB=require('./config/connectDB')
connectDB()
//format Json
app.use(express.json())
//Routes

app.use("/api/contacts",require('./Route/contact'))


//creation of server
const port=process.env.PORT
app.listen(port,error=>{
    error?console.log(error):console.log(`The server is running on port :${port}`)
}
    )