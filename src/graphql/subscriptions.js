/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicPost = /* GraphQL */ `
  subscription OnCreatePublicPost {
    onCreatePublicPost {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePublicPost = /* GraphQL */ `
  subscription OnUpdatePublicPost {
    onUpdatePublicPost {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePublicPost = /* GraphQL */ `
  subscription OnDeletePublicPost {
    onDeletePublicPost {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivatePost = /* GraphQL */ `
  subscription OnCreatePrivatePost($owner: String!) {
    onCreatePrivatePost(owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivatePost = /* GraphQL */ `
  subscription OnUpdatePrivatePost($owner: String!) {
    onUpdatePrivatePost(owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivatePost = /* GraphQL */ `
  subscription OnDeletePrivatePost($owner: String!) {
    onDeletePrivatePost(owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePostWithEditor = /* GraphQL */ `
  subscription OnCreatePostWithEditor($owner: String!, $editors: String!) {
    onCreatePostWithEditor(owner: $owner, editors: $editors) {
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
export const onUpdatePostWithEditor = /* GraphQL */ `
  subscription OnUpdatePostWithEditor($owner: String!, $editors: String!) {
    onUpdatePostWithEditor(owner: $owner, editors: $editors) {
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
export const onDeletePostWithEditor = /* GraphQL */ `
  subscription OnDeletePostWithEditor($owner: String!, $editors: String!) {
    onDeletePostWithEditor(owner: $owner, editors: $editors) {
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
