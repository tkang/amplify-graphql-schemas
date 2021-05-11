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
