import { GraphQLClient } from "graphql-request";
const graphqlRequestClient = new GraphQLClient(
  "http://localhost:3001/graphql",
  {
    credentials: "include",
  }
);
export default graphqlRequestClient;
