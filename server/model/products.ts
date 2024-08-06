import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const productSchema = new Schema<IProduct>({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
});

const product = mongoose.model("product", productSchema);

export default product;
