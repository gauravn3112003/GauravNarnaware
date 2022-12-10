import initDB from "../../helper/initDB";
import Blogs from "../../Modal/Blogs";
initDB();

export default async (req, res) => {
    try {
        const countConnect = await Blogs.find().countDocuments();
        res.json(countConnect);
      } catch (error) {
        console.log(error);
      }
};