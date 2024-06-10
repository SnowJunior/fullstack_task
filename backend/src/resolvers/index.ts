import { booksData } from '../data/books';
import { readingList } from '../data/teacher';
import { Book } from '../model/book';

export const resolvers = {
  Query: {
    books: () => booksData,
    readingList: () => readingList,
  },
  Mutation: {
    addBookToList: (_: never, { author }: {author: string}): Book[] => {
      const book = booksData.find((b) => b.author === author);
      if (book && !readingList.find((b) => b.author === author)) {
        readingList.push(book);
      }
      return readingList;
    },
    removeBookFromList: (_: never,{ author }: {author: string}): Book[] => {
      const index = readingList.findIndex((b) => b.author === author);
      if (index !== -1) {
        readingList.splice(index, 1);
      }
      return readingList;
    },
  },
};
