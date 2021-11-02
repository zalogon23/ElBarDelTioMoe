import { ApolloClient, InMemoryCache } from "@apollo/client";

const serverUrl = "https://localhost:5001/api";

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