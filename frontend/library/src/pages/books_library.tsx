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
import { useState } from "react";
import { showToast } from "../hooks/useToast";
import useDebounce from "../hooks/useDebounce";
import SearchQuery from "../components/Input/text_input";

const BookLibrary = () => {
  const { data, loading } = useQuery(GET_BOOKS);
  const { data: addedBooks } = useQuery(GET_READING_LIST);
  const [tab, setTab] = useState<string>("all_books");
  const [addBookToList] = useMutation(ADD_BOOK_TO_LIST);
  const [removeBookFromList] = useMutation(REMOVE_BOOK_FROM_LIST);
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleAddToReadingList = async (book: BookModel) => {
    try {
      if (
        addedBooks.readingList.some((b: BookModel) => b.author == book.author)
      ) {
        showToast("warn", "Book is already added to reading list");
        return;
      }
      await addBookToList({
        variables: { author: book.author, title: book.title },
        refetchQueries: [{ query: GET_READING_LIST }],
      });
      showToast("success", "Added Book Successfully");
    } catch (error) {
      showToast("error", "Failed to add book");
      throw new Error(`${error}`);
    }
  };

  const handleRemoveFromReadingList = async (book: BookModel) => {
    try {
      await removeBookFromList({
        variables: { author: book.author, title: book.title },
        refetchQueries: [{ query: GET_READING_LIST }],
      });
      showToast("success", "Book removed successfully");
    } catch (error) {
      showToast("error", "Could not remove book");
      throw new Error(`${error}`);
    }
  };
  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };
  const filteredBooks = data?.books.filter((book: BookModel) =>
  book.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
) || []; 
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setTab(newAlignment);
    }
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
        <SearchQuery placeholder="Search by title" onSearch={handleSearch} />
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
          <ToggleButton value="reading_list">Reading List</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <div>
        {tab === "all_books" ? (
          <div className="books_container">
            {filteredBooks.length > 0 ?(filteredBooks.map((book: BookModel, idx: number) => (
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
            ))): ('')}
          </div>
        ) : (
          <div className="books_container">
            {addedBooks.readingList.map((book: BookModel, index: number) => (
              <BookItem
                key={index}
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
