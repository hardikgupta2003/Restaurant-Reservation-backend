import mongoose from 'mongoose'
import validator from 'validator';

const ReservationSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLen:[10, "contact no. cannot less than 10 digits"],
        maxLen:[10, "contact no. cannot more than 10 digits"]
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    people:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const Reservation = mongoose.model("Reservation",ReservationSchema);