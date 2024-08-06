import { Request, Response } from "express";
import product from "../model/products.js";

interface ProD {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const CreateProducts = async (
  parent: any,
  args: ProD,
  context: { req: Request; res: Response }
) => {
  const { name, price, description, image, category } = args;

  if (!args) return "required all fields";
  console.log(name, price, description); // These should now be defined

  const newP = await product.create({
    name,
    price,
    description,
    image,
    category,
  });

  if (newP) {
    return "product created";
  }
  return "product not created";
};

export const GetProducts = async (context: { req: Request; res: Response }) => {
  const products = await product.find();
  return products;
};
