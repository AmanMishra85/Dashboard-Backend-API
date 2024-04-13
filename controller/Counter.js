import MyModel from "../model/Myobject.js";

export const Counter1 = async(req,res)=>{
    try{
        const result = await MyModel.aggregate([
            {
                $group:{
                    _id:"$topic",
                    count:{$sum: 1},
                }
            }
        ])
        const total = result.length;
        res.status(200).send({total})
    }
    catch(err){
        res.status(500).send(err)
    }
} 

export const Counter2 = async(req,res)=>{
    try{
        const result = await MyModel.aggregate([
            {
                $group:{
                    _id:"$country",
                    count:{$sum: 1},
                }
            }
        ])
        const total = result.length;
        res.status(200).send({total})
    }
    catch(err){
        res.status(500).send(err)
    }
} 

export const Counter3 = async(req,res)=>{
    try{
        const result = await MyModel.aggregate([
            {
                $group:{
                    _id:"$region",
                    count:{$sum: 1},
                }
            }
        ])
        const total = result.length;
        res.status(200).send({total})
    }
    catch(err){
        res.status(500).send(err)
    }
} 

export const Counter4 = async(req,res)=>{
    try{
        const result = await MyModel.aggregate([
            {
                $group:{
                    _id:"$sector",
                    count:{$sum: 1},
                }
            }
        ])
        const total = result.length;
        res.status(200).send({total})
    }
    catch(err){
        res.status(500).send(err)
    }
} 

