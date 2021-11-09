import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const serverUrl = "http://192.168.0.2:5002/api";
const httpLink = createHttpLink({ uri: serverUrl + "/graphql" });
const authLink = setContext((_, { headers }) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTdjNTc2MThkNzI5NDFmOThhMDhkNDciLCJuYmYiOjE2MzY0ODM2NTEsImV4cCI6MTYzNjQ4Mzc3MSwiaWF0IjoxNjM2NDgzNjUxfQ.m6GJxtqokHDAEa3HoRJT79ymHXjMX-d0ri4uQUmzZzI";
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : ""
    }
  };
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
});

export { serverUrl }
export default client