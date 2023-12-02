import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://5e03-140-213-169-186.ngrok-free.app/",
  cache: new InMemoryCache(),
});

export default client;
