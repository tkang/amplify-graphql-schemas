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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
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
