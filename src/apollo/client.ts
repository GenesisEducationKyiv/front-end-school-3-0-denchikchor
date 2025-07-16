import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const apiUrl = import.meta.env.VITE_API_URL;

export const client = new ApolloClient({
  link: createUploadLink({
    uri: apiUrl,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
