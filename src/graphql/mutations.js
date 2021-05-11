/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublicPost = /* GraphQL */ `
  mutation CreatePublicPost(
    $input: CreatePublicPostInput!
    $condition: ModelPublicPostConditionInput
  ) {
    createPublicPost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const updatePublicPost = /* GraphQL */ `
  mutation UpdatePublicPost(
    $input: UpdatePublicPostInput!
    $condition: ModelPublicPostConditionInput
  ) {
    updatePublicPost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const deletePublicPost = /* GraphQL */ `
  mutation DeletePublicPost(
    $input: DeletePublicPostInput!
    $condition: ModelPublicPostConditionInput
  ) {
    deletePublicPost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const createPrivatePost = /* GraphQL */ `
  mutation CreatePrivatePost(
    $input: CreatePrivatePostInput!
    $condition: ModelPrivatePostConditionInput
  ) {
    createPrivatePost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivatePost = /* GraphQL */ `
  mutation UpdatePrivatePost(
    $input: UpdatePrivatePostInput!
    $condition: ModelPrivatePostConditionInput
  ) {
    updatePrivatePost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivatePost = /* GraphQL */ `
  mutation DeletePrivatePost(
    $input: DeletePrivatePostInput!
    $condition: ModelPrivatePostConditionInput
  ) {
    deletePrivatePost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPostWithEditor = /* GraphQL */ `
  mutation CreatePostWithEditor(
    $input: CreatePostWithEditorInput!
    $condition: ModelPostWithEditorConditionInput
  ) {
    createPostWithEditor(input: $input, condition: $condition) {
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
export const updatePostWithEditor = /* GraphQL */ `
  mutation UpdatePostWithEditor(
    $input: UpdatePostWithEditorInput!
    $condition: ModelPostWithEditorConditionInput
  ) {
    updatePostWithEditor(input: $input, condition: $condition) {
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
export const deletePostWithEditor = /* GraphQL */ `
  mutation DeletePostWithEditor(
    $input: DeletePostWithEditorInput!
    $condition: ModelPostWithEditorConditionInput
  ) {
    deletePostWithEditor(input: $input, condition: $condition) {
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
export const createPostWithReaderGroup = /* GraphQL */ `
  mutation CreatePostWithReaderGroup(
    $input: CreatePostWithReaderGroupInput!
    $condition: ModelPostWithReaderGroupConditionInput
  ) {
    createPostWithReaderGroup(input: $input, condition: $condition) {
      id
      title
      content
      readers
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePostWithReaderGroup = /* GraphQL */ `
  mutation UpdatePostWithReaderGroup(
    $input: UpdatePostWithReaderGroupInput!
    $condition: ModelPostWithReaderGroupConditionInput
  ) {
    updatePostWithReaderGroup(input: $input, condition: $condition) {
      id
      title
      content
      readers
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePostWithReaderGroup = /* GraphQL */ `
  mutation DeletePostWithReaderGroup(
    $input: DeletePostWithReaderGroupInput!
    $condition: ModelPostWithReaderGroupConditionInput
  ) {
    deletePostWithReaderGroup(input: $input, condition: $condition) {
      id
      title
      content
      readers
      createdAt
      updatedAt
      owner
    }
  }
`;
