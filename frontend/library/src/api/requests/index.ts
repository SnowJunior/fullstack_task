import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const BOOKS_QUERY = gql`
  query SearchBooks($title: String) {
    books(title: $title) {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;

export const ADD_BOOK_TO_LIST = gql`
  mutation AddBookToList($author: String!, $title: String!) {
    addBookToList(author: $author, title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const REMOVE_BOOK_FROM_LIST = gql`
  mutation RemoveBookFromList($author: String!, $title: String!) {
    removeBookFromList(author: $author, title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const GET_READING_LIST = gql`
  query GetReadingList {
    readingList {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;
