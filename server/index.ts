import "dotenv/config";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { connectDB } from "./database/connectDB.js";
import bodyParser from "body-parser";
import { connectGraph } from "./grphql/ConnectGraph.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST"],
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
const apolloServer = connectGraph();
await apolloServer.start();
app.use("/graphql", expressMiddleware(apolloServer));

app.get("/", (req, res) => {
  res.render("index");
});

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
