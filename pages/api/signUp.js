import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import bcrypt from "bcryptjs";
import SavedBlog from "../../Modal/SavedBlog"
initDB();


export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchUsers(req, res);
      break;
    case "POST":
      await addUser(req, res);
      break;
  }
};


const addUser =  async (req, res) => {
  const { name, userName, email, password } = req.body;
  try {
    if (!name || !userName || !email || !password) {
      return res.status(422).json({ error: "please fill all the fields" });
    }
    const emailR = await User.findOne({ email });
    const userNameR = await User.findOne({ userName });
    if (userNameR) {
      return res
        .status(422)
        .json({ error: "User already exists with that Username" });
    }
    if (emailR) {
      return res
        .status(422)
        .json({ error: "user already exists with that email" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({
      name,
      userName,
      email,
      password: hashedPassword,
    }).save();
    await new SavedBlog({ User: newUser._id }).save()
    res.status(201).json({ error: "signup success" });

  } catch (err) {
    console.log(err);
  }
};


// Fetch All Blogs
const fetchUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
