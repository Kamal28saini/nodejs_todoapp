import mongoose from "mongoose";

export const connectDB = ()=>{
// MongoDB connection 
mongoose.connect(process.env.MONGO_URL, {
dbName: "backendapi",
}).then((c) => console.log(`Database is connected with ${c.connection.host}`))
.catch((e) => console.log(e));
};