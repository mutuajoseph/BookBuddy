import { Box, Spinner, Text } from "@chakra-ui/react";
import { booksData } from "../../constants";
import { BookItem } from "../bookitem/BookItem";
import { useState } from "react";
import { useEffect } from "react";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // load the books
    // we are suppposed to update the state with the loaded books
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    setLoading(true);
    setTimeout(() => {
      setBooks(booksData);
      setLoading(false);
    }, 10000);
  };

  return (
    <Box p={"2rem"}>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          {books.length > 0 ? (
            <>
              {books.map((book, index) => (
                <BookItem key={index} book={book} />
              ))}
            </>
          ) : (
            <>
              <Text>No books to show </Text>
            </>
          )}
        </>
      )}
    </Box>
  );
};
