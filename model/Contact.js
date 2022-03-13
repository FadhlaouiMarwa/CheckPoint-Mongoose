//importation moongoose
const mongoose=require("mongoose")
//structure du shema
const {Schema}= mongoose
const contactSchema= new Schema ({
    name:{
        require:true,
        type:String
          },
    email:{
            require:true,
            type:String,
            unique:true
           },
    phone:Number
}
)
module.exports=contact=mongoose.model("contact",contactSchema )