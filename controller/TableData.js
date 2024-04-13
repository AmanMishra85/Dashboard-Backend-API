import MyModel from "../model/Myobject.js";

const TableData = async(req,res)=>{
    try{
        const gvalue = req.body.type;
        const data = await MyModel.aggregate([
            {
                $group:{
                    _id:'$'+`${gvalue}`,
                    count:{'$sum':1}
                },
            }
        ]).sort({count:1})
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send(err);
    }
}

export default TableData;