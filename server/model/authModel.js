const mongoose=require('mongoose')
const {Schema}=mongoose
const User=new Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
        password:{
            type:String,
            trim:true,
            required:true, 
            min: 6,
            max:64,
        },
        role:{
            type:String,
            default:'Subscriber'
        },
        // image:{
        //     type:String,
        //     trim:true,
        //     required:true, 
        // },
        resetCode:"String"
    },
    {timestamps:true}
)

module.exports= mongoose.model("user", User)