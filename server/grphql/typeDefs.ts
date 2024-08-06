// 9848845622  && 9741898948
export const typeDefs = `#graphql
type product{
    id:ID!
    name: String!
  price :Int!
  description: String!
  image: String!
  category: String!
}
type Query{
  getProducts:[product]
}
type Mutation{
    createProducts(name:String! , price:Int! , description:String! ,image:String!, category:String!):String
}

`;
