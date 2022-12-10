import mongoose from "mongoose";

// gvrv_n03  gvrv_n
// MONGODB_URI=mongodb+srv://gvrv_n:gvrv_n03@cluster0.rtbf1.mongodb.net/?retryWrites=true&w=majority
function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already Connected");
    return
  }

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to mongo");
  });
  mongoose.connection.on("error", (e) => {
    console.log("Connection failed", e);
  });
}

export default initDB;
