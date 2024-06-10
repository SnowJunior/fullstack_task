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
  mutation AddBookToList($author: String!) {
    addBookToList(author: $author) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const REMOVE_BOOK_FROM_LIST = gql`
  mutation RemoveBookFromList($author: String!) {
    removeBookFromList(author: $author) {
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
