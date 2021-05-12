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
export const getPostWithReaderGroup = /* GraphQL */ `
  query GetPostWithReaderGroup($id: ID!) {
    getPostWithReaderGroup(id: $id) {
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
export const listPostWithReaderGroups = /* GraphQL */ `
  query ListPostWithReaderGroups(
    $filter: ModelPostWithReaderGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostWithReaderGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        readers
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      title
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          topicId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      topicId
      content
      createdAt
      updatedAt
      topic {
        id
        title
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topicId
        content
        createdAt
        updatedAt
        topic {
          id
          title
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      createdAt
      updatedAt
      users
      messages {
        items {
          id
          text
          createdAt
          channelId
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        users
        messages {
          nextToken
        }
      }
      nextToken
    }
  }
`;
