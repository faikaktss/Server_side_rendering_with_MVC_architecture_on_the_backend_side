import { Request,Response } from "express";
import { findAllUsers } from "../models/userModel";
export const getAllUsers = async(req:Request,res:Response) =>{
    try{    
        const users = await findAllUsers();
        res.render('users',{ users });
    }catch(error){  
        console.log(error);
        res.status(400).json({message:"Bir hata oluştu"});
    }
}