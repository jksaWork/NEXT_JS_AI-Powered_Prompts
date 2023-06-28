import mongoose from "mongoose";
let isconected = false;
export const connectToDB = async () => {
  if (isconected) {
    console.log("The MogoDb Alerdry Is Connect");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isconected = true;
  } catch (e) {
    console.log(e.message);
  }
};
