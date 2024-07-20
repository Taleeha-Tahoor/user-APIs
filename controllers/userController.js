import asyncHandler from "express-async-handler";
import Users from "../models/userModel.js";

export const getUsers = asyncHandler(async (req, res) => {
    const users = await Users.find();
    res.status(200).json(users);
});

export const createUser = asyncHandler(  async (req, res) => {
    console.log('Request body is: ', req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const user = await Users.create({
        name,
        email,
        phone,
    });
    res.status(201).json(user);
});

export const getUser = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(user);
});


export const updateUser = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedUser);
});

export const deleteUser = asyncHandler(async (req, res) => {    
    const user = await Users.findById(req.params.id);
    if (!user) {
        console.log("User not found");
        res.status(404);
        throw new Error("User Not Found");
    }
    await Users.deleteOne({ _id: req.params.id });
    
    res.status(200).json({ message: `Deleted user ${req.params.id}` });
});


