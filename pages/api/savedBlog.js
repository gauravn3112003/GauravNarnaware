import savedBlog from "../../Modal/SavedBlog";
import Authenticated from "../../helper/Aunthenticated";
import initDB from "../../helper/initDB";
initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchUserBlog(req, res);
      break;
    case "PUT":
      await addBlog(req, res);
      break;
    case "DELETE":
      await removeBlog(req, res);
      break;
  }
};

const fetchUserBlog = Authenticated(async (req, res) => {
  const blog = await savedBlog
    .findOne({ User: req.userId })
    .populate("Blogs.blog");
  res.status(200).json(blog.Blogs);
});

const addBlog = Authenticated(async (req, res) => {
  const { blogId } = req.body;
  const blog = await savedBlog.findOne({ User: req.userId });
  const bExists = blog.Blogs.some((Blogs) => blogId === Blogs.blog.toString());

  try {
    if (bExists) {
      res.status(201).json({ save: "Blog Already Saved" });
      // await removeBlog(req, res);
    } else {
      const newBlog = { blog: blogId };
      await savedBlog.findOneAndUpdate(
        { _id: blog._id },
        { $push: { Blogs: newBlog } }
      );
      res.status(201).json({ save: "Blog Saved"});
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const removeBlog = Authenticated(async (req, res) => {
  const { blogId } = req.body;
  try {
    const newBlog = await savedBlog
      .findOneAndUpdate(
        { User: req.userId },
        { $pull: { Blogs: { blog: blogId } } },
        { new: true }
      )
      .populate("Blogs.blog");
    res.status(200).json({ blogs: newBlog.Blogs, remove: "Removed Blog" });
  } catch (error) {
    res.json({ error: "Internal Server Error" });
  }
});
