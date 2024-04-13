import MyModel from "../model/Myobject.js";

const DeleteData = async(req,res)=>{
    try{
        const result = await MyModel.deleteMany();
        res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err)
    }
} 

export default DeleteData;