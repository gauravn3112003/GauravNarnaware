import mongoose,{models} from "mongoose";
const { Schema } = mongoose;

const connectSchema = new Schema({
  name: String, 
  email: String,
  message: String,
  subject:String,
  date: {
    type: Date,
    default: Date.now,
  },

});


export default mongoose.models.connect || mongoose.model('connect', connectSchema)