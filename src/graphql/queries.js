/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicPost = /* GraphQL */ `
  query GetPublicPost($id: ID!) {
    getPublicPost(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const listPublicPosts = /* GraphQL */ `
  query ListPublicPosts(
    $filter: ModelPublicPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivatePost = /* GraphQL */ `
  query GetPrivatePost($id: ID!) {
    getPrivatePost(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivatePosts = /* GraphQL */ `
  query ListPrivatePosts(
    $filter: ModelPrivatePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivatePosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
