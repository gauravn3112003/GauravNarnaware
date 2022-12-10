import initDB from "../../../helper/initDB";
import Blogs from "../../../Modal/Blogs";
initDB();

export default async function  handler  (req, res) {
    const { pid } = req.query
    const posts = await  Blogs.findById(pid);
    res.json(posts);
  }