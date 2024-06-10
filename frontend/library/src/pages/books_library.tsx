import BookItem from "../components/BookItem/book_item";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_BOOK_TO_LIST,
  GET_BOOKS,
  GET_READING_LIST,
  REMOVE_BOOK_FROM_LIST,
} from "../api/requests";
import { BookModel } from "../models";
import "./books_library.scss";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SearchQuery from "../components/Input/text_input";
import { useState } from "react";

const BookLibrary = () => {
  const { data, loading } = useQuery(GET_BOOKS);
  const { data: addedBooks } = useQuery(GET_READING_LIST);
  const [tab, setTab] = useState<string>("all_books");
  const [addBookToList] = useMutation(ADD_BOOK_TO_LIST);
  const [removeBookFromList] = useMutation(REMOVE_BOOK_FROM_LIST);

  const handleAddToReadingList = (book: BookModel) => {
    addBookToList({
      variables: { author: book.author },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  const handleRemoveFromReadingList = (book: BookModel) => {
    removeBookFromList({
      variables: { author: book.author },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setTab(newAlignment);
  };
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <Box
      width={"90%"}
      mx={"auto"}
      display={"flex"}
      flexDirection={"column"}
      gap={"4rem"}
    >
      <Box>
        <SearchQuery />
      </Box>

      <Box>
        <ToggleButtonGroup
          color="primary"
          value={tab}
          exclusive
          onChange={handleChange}
          aria-label="Section"
        >
          <ToggleButton value="all_books">All Books</ToggleButton>
          <ToggleButton value="teacher">Reading List</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <div className="">
        {tab === "all_books" ? (
          <div className="books_container">
            {data.books.map((book: BookModel, idx: number) => (
              <BookItem
                key={idx}
                book={{
                  title: book.title,
                  author: book.author,
                  readingLevel: book.readingLevel,
                  coverPhotoURL: book.coverPhotoURL,
                  isAllBooks: true,
                  addBook() {
                    handleAddToReadingList(book);
                  },
                }}
              />
            ))}
          </div>
        ) : (
          <div className="books_container">
            {addedBooks.readingList.map((book: BookModel) => (
              <BookItem
                book={{
                  title: book.title,
                  author: book.author,
                  readingLevel: book.readingLevel,
                  coverPhotoURL: book.coverPhotoURL,
                  isAllBooks: false,
                  addBook() {
                    handleAddToReadingList(book);
                  },
                  removeBook() {
                    handleRemoveFromReadingList(book);
                  },
                }}
              />
            ))}
          </div>
        )}
      </div>
    </Box>
  );
};

export default BookLibrary;
