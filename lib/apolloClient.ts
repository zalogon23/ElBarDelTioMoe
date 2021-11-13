import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const serverUrl = "http://192.168.0.2:5002/api";

const client = new ApolloClient({
  uri: serverUrl + "/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    },
    query: {
      fetchPolicy: "network-only"
    }
  }
});

export { serverUrl }
export default client