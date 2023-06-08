import errorHandler from "../middlewares/error.js";
import {Task} from "../models/task.js"
import { User } from "../models/user.js";

export const newTask = async(req,res,next)=>{

    try {
        const { title,description} = req.body;

    // const task = new Task({title});
    // await task.save()

    await Task.create({
        title,
        description,
        user:req.user 
    });
    res.status(201).json({
        success:true,
        message:"Task added Successfully"
    })
    } catch (error) {
      next(error);  
    }
};

export const getMyTask = async(req,res,next)=>{
    try {
        const userid = req.user._id;

    const tasks = await Task.find({user : userid});

    res.status(200).json({
        success:true,
        tasks,
    })
    } catch (error) {
      next(error)  
    }
}

export const updateTask = async(req,res,next)=>{
    try {
        // const {id} = req.params;

    const task = await Task.findById(req.params.id);

    if(!task) 
        return next(new errorHandler("Task not found!!",404))
    task.isCompleted = !task.isCompleted;

    await task.save();
    res.status(200).json({
        success:true,
        message:"Task is Updated",
    })
    } catch (error) {
      next(error)  
    }
};
export const deleteTask = async(req,res,next)=>{

    try {
        const task = await Task.findById(req.params.id);

    if(!task) 
        return next(new errorHandler("Task not found!!",404))
    await task.deleteOne();

    res.status(200).json({
        success:true,
        message:"Task is Deleted",
    })
    } catch (error) {
      next(error)  
    }
};