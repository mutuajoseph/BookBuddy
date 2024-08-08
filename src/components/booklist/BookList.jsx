import { Box, Spinner, Text } from "@chakra-ui/react";
import { BookItem } from "../bookitem/BookItem";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllBooks } from "../../services";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // load the books
    // we are suppposed to update the state with the loaded books
    handleBookFetch()
  }, []);

  const handleBookFetch =  async () => {
    setLoading(true)
  
    const response = await fetchAllBooks()

    if (response) {
      setLoading(false)
      setBooks(response)
    }
  }


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
