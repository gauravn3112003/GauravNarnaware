import initDB from "../../helper/initDB";
import ConnectUs from "../../Modal/ConnectUs";
initDB();

export default async (req, res) => {
    try {
        const countConnect = await ConnectUs.find().countDocuments();
        res.json(countConnect);
      } catch (error) {
        console.log(error);
      }
};