import initDB from "../../helper/initDB";
import Blogs from "../../Modal/Blogs";
initDB();

export default async (req, res) => {
  try {
    const { pid } = req.query
    console.log(pid)
    res.end(`Post: ${pid}`)
      const posts = await Blogs.findById(pid);
      res.json(posts);
  } catch (error) {
    console.log(error);
  }
};
