import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/cl2hk4v88479w01w00zl62vzs/master",
  cache: new InMemoryCache(),
});

export default client;