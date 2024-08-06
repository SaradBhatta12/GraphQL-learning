import { CreateProducts, GetProducts } from "../controller/products.js";

export const resolvers = {
  Query: {
    getProducts: GetProducts,
  },
  Mutation: {
    createProducts: CreateProducts,
  },
};
