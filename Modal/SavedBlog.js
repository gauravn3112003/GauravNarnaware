import mongoose, { models } from "mongoose";
const { ObjectId } = mongoose.Schema.Types
const { Schema } = mongoose;

const SavedBlogSchema = new Schema({
    User: {
        type: ObjectId,
        ref: "User"
    },
    Blogs: [
        {
            blog: { type: ObjectId, ref: "blog" }
        }
    ]
});
export default mongoose.models.savedBlog || mongoose.model('savedBlog', SavedBlogSchema)