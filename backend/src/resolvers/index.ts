import { booksData } from '../data/books';
import { readingList } from '../data/teacher';
import { Book } from '../model/book';

export const resolvers = {
  Query: {
    books: () => booksData,
    readingList: () => readingList,
  },
  Mutation: {
    addBookToList: (_: never, { author, title }: {author: string, title: string}): Book[] => {
      const book = booksData.find((b) => b.author === author && b.title === title);
      if (book && !readingList.find((b) => b.author === author && b.title === title)) {
        readingList.push(book);
      }
      return readingList;
    },
    removeBookFromList: (_: never,{ author, title }: {author: string, title: string}): Book[] => {
      const index = readingList.findIndex((b) => b.author === author && b.title === title);
      if (index !== -1) {
        readingList.splice(index, 1);
      }
      return readingList;
    },
  },
};
