import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL as string, {
        dbName: "what",
      })
      .then((conn) => {
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
