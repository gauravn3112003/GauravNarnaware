import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

initDB();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({ error: "please fill all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "Invalid Credentials !" });
    }
    const doMatch = await bcrypt.compare(password, user.password);

    if (doMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { name, userName, _id, email } = user;
      const auth = await bcrypt.hash(user.role, 12);
      res.status(201).json({
        token, auth,
        User: { name, userName, _id, email }
      });
    } else {
      return res.status(401).json({ error: "Invalid Credentials !" });
    }
  } catch (err) {
    console.log(err);
  }
};
