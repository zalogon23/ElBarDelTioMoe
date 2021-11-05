import { ApolloClient, InMemoryCache } from "@apollo/client";

const serverUrl = "http://192.168.0.2:5002/api";

const client = new ApolloClient({
  uri: serverUrl + "/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
});

export { serverUrl }
export default client