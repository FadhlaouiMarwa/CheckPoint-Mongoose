//importation mongoose
const mongoose=require("mongoose")

//La fonction de la connexion de la base de données
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log("DataBase connected successfully");

    } catch (error) {
        console.log("Fail to connect")
        
    }

}
module.exports=connectDb