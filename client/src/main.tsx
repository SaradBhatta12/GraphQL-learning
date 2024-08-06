import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4444/graphql",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
