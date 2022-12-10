import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
initDB();

export default async function handler(req, res) {
  try {
    const { user } = req.query;
    const posts = await User.findById(user);
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
}
