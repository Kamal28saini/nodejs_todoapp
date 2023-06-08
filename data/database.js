import mongoose from "mongoose";

export const connectDB = ()=>{
// MongoDB connection 
mongoose.connect(process.env.MONGO_URL, {
dbName: "backendapi",
}).then(() => console.log("Database is connected"))
.catch((e) => console.log(e));
};