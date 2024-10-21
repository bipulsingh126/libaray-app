import { UserModel } from "../models/userModels.js";





export const  signUp  = async (req ,res )=>{
    try {
        const {username, email , password, address} = req.body;

            //check username leangth 

        if (username.length < 4 ) {
            return res.status(400).json({
                message : 'Username must be at least 4 characters long',
                success : false
            })
        }

        //check username alredy existing 

        const existingUsername = await UserModel.findOne({username : username});
        if(existingUsername) return res.status(400).json({
            message : 'Username already exists',
            success : false
        })

        //check email alredy existing

        const existingEmail = await UserModel.findOne({email : email});
        if(existingEmail) return res.status(400).json({
            message : 'Email already exists',
            success : false
        })

        //password check length
        if (password.length < 8 ) {
            return res.status(400).json({
                message : 'Password must be at least 8 characters long',
                success : false
            })
        }

        //address check 
        if (!address) {
            return res.status(400).json({
                message : 'Address is required',
                success : false
            })
        }

        //create new user
        const newUser = new UserModel({
            username,
            email,
            password,
            address
        });
        const user = await newUser.save();
        return res.statu(200).json({
            message : 'User created successfully',
            success : true,
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
            success : false
        })
        
    }
}