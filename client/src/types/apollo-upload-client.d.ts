declare module "apollo-upload-client/createUploadLink.mjs" {
  import { ApolloLink } from "@apollo/client";
  export default function createUploadLink(options: {
    uri: string;
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
    fetchOptions?: RequestInit;
  }): ApolloLink;
}
