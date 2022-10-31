import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require:true,
            index: {
                unique: true
            }
        },
         amount:{
            type: Number,
            require: true
         },
         quantity:{
            type:Number,
            require:true
         },
         description:{
            type:String,
            require:true
         },
         userId: {
            type:String,
            require:true,
        }
        
    },
    {
        timestamps:true
     }
)

export default mongoose.model('product', productSchema)