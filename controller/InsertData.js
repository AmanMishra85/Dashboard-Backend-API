import MyModel from "../model/Myobject.js";
import fs from "fs";

const InsertData = (req, res) => {
  fs.readFile("jsondata.json", "utf8", async (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const jsondata = JSON.parse(data);

    try {
      await MyModel.insertMany(jsondata);
      res.status(200).send("All data is inserted!");
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

export default InsertData;