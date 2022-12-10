import initDB from "../../helper/initDB";
import ConnectUs from "../../Modal/ConnectUs";
initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchConnect(req, res);
      break;
    case "POST":
      await addConnect(req, res);
      break;
    case "DELETE":
      await deletConnects(req, res);
      break;
  }
};

// To Add Connect Us
const addConnect = async (req, res) => {
  const { name, email,subject, message } = req.body;
  try {
    if (!name || !email || !subject || !message) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    const connect = await new ConnectUs({
      name,
      email,
      subject,
      message,
    }).save();
    res.status(201).json(connect);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
    console.log(err);
  }
};

// Fetch All Connect Us
const fetchConnect = async (req, res) => {
  try {
    const connect = await ConnectUs.find();
    res.status(200).json(connect);
  } catch (err) {
    console.log(err);
  }
};

// to delete specific connects

const deletConnects = async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let connect = await ConnectUs.findById(req.params.id);
    if (!connect) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Note
    if (connect.email.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    connect = await ConnectUs.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", connect: connect });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
