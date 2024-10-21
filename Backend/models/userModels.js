import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    address :{
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        default : 'https://t4.ftcdn.net/jpg/08/36/86/91/360_F_836869132_Qtdwo25XtmM2ZmKWGBdeNiYSX9LZZVPh.jpg',
    },
    role :{
         type : String,
         default : 'user',
         enum : ['user', 'admin'],
    },
    favourites : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Books',
    }],
    cart : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'orders',
    }]

},{timestamps: true})

export const  userModel = mongoose.models.user || mongoose.model("user" , userSchema);