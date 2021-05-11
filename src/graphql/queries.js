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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getPostWithEditor = /* GraphQL */ `
  query GetPostWithEditor($id: ID!) {
    getPostWithEditor(id: $id) {
      id
      title
      content
      editors
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPostWithEditors = /* GraphQL */ `
  query ListPostWithEditors(
    $filter: ModelPostWithEditorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostWithEditors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        editors
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
