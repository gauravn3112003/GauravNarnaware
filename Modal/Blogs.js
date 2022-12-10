import mongoose, { models } from "mongoose";
const date = require('date-and-time')
const { Schema } = mongoose;
const now = new Date();
const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
const blogSchema = new Schema({
  title: String,
  category: String,
  author: {
    type: String,
    default: "Gaurav Narnaware",
  },
  image: String,
  description: String,
  artical: String,
  date: {
    type: String,
    default: value,
  }



});



export default mongoose.models.blog || mongoose.model('blog', blogSchema)