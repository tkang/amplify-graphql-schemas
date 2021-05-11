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
