//importation express
const express=require("express")
//importation express Router
const router=express.Router()
//importation du schema
const Contact=require('../model/Contact')


//CRUDS
// Description: Get
// path:http://localhost:5000/api/contacts/test


router.get("/test",(req,res)=>{
    res.send("Bonjour Julia")
}
)
// Description: Post
// path:http://localhost:5000/api/contacts/
//req.body
router.post("/",async(req,res)=>{
    try {
        const {name,email,phone}=req.body
    const newContact=new Contact({name,email,phone})
    await newContact.save()
    return res.status(200).send({msg:"Contact added", newContact})
        
    } catch (error) {
         res.status(400).send({msg:"canot add this contact",error})
    }
}
)

//Description: Get
//path:http://localhost:5000/api/contacts/all
router.get("/all",async(req,res)=>{
    try {
        const contactList=await Contact.find()
        return res.status(200).send({msg:"Voilà notre liste", contactList})

    } catch (error) {
        res.status(400).send({msg:"La liste n'a pas été téléchargée",error})
        
    }
}
)

//Description: Get one
//path:http://localhost:5000/api/contacts/:_id
//req.params
router.get("/:_id",async(req,res)=>{
    try {
        const {_id}=req.params
        const FoundContact=await Contact.findOne({_id})
        return res.status(200).send({msg:"Contact founded", FoundContact})
        
    } catch (error) {
        res.status(400).send({msg:"Contact not founded",error})
    }

})

//Description: upDate
//path:http://localhost:5000/api/contacts/edit/:_id
//req.params $$ req.body
router.put("/edit/:_id",async(req,res)=>{
    try {
        const {_id}=req.params
        const {name,email,phone}=req.body
        const EditContact= await Contact.updateOne({_id},{$set:{...req.body}})
        return  res.status(200).send({msg:"Update OK", EditContact})
    } catch (error) {
        res.status(400).send({msg:"Update KO",error})

    }
})
//Description: delete
//path:http://localhost:5000/api/contacts/dele/:_id
//req.params

router.delete("/dele/:_id", async(req,res)=>{
    try {
        const {_id}=req.params
        const deletContact= await Contact.deleteOne({_id})
        return  res.status(200).send({msg:"Contact deleted OK", deletContact})
        
    } catch (error) {
        res.status(400).send({msg:"Contact deleted KO",error})
        
    }
})



module.exports=router 