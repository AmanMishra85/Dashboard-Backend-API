import MyModel from "../model/Myobject.js";

const GetStartYear = async (req, res) => {
  try {
    const data = await MyModel.aggregate([
      {
        $group:{
            _id:"$start_year",
            count:{$sum: 1},
            avgItensity:{$avg:'$intensity'},
            avgLikelyhood:{$avg:'$likelihood'},
            avgRelevence:{$avg:'$relevance'}
        }
    },
    {
        $project:{
            _id:1,
            avgItensity:1,
            avgLikelyhood:1,
            avgRelevence:1
        }
    }
    ]);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default GetStartYear;
