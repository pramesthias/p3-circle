import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";

const httpLink = createHttpLink({
  // uri: "http://13.229.212.85/",
  uri: "https://circle.pramresto.site/",
  // uri: "https://2141-112-215-140-110.ngrok-free.app/",
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
