export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Teacher {
    id: ID!
    name: String
    readingList: [Book]
  }

  type Query {
    books: [Book]
    readingList: [Book]
  }

  type Mutation {
    addBookToList(author: String!): [Book]
    removeBookFromList(author: String!): [Book]
  }
`;
