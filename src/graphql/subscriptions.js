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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      text
      createdAt
      channelId
      updatedAt
      channel {
        id
        name
        createdAt
        updatedAt
        users
        messages {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      text
      createdAt
      channelId
      updatedAt
      channel {
        id
        name
        createdAt
        updatedAt
        users
        messages {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      text
      createdAt
      channelId
      updatedAt
      channel {
        id
        name
        createdAt
        updatedAt
        users
        messages {
          nextToken
        }
      }
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
export const onCreatePostWithReaderGroup = /* GraphQL */ `
  subscription OnCreatePostWithReaderGroup($owner: String!) {
    onCreatePostWithReaderGroup(owner: $owner) {
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
export const onUpdatePostWithReaderGroup = /* GraphQL */ `
  subscription OnUpdatePostWithReaderGroup($owner: String!) {
    onUpdatePostWithReaderGroup(owner: $owner) {
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
export const onDeletePostWithReaderGroup = /* GraphQL */ `
  subscription OnDeletePostWithReaderGroup($owner: String!) {
    onDeletePostWithReaderGroup(owner: $owner) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel {
    onCreateChannel {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel {
    onUpdateChannel {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel {
    onDeleteChannel {
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
