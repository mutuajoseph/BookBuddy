import { Box } from "@chakra-ui/react";
import { booksData } from "../../constants";
import { BookItem } from "../bookitem/BookItem";
import { useState } from "react";

export const BookList = () => {
  const [books, setBooks] = useState(booksData);

  return (
    <Box p={"2rem"}>
        {books.map((book, index) => (
            <BookItem key={index} book={book}/>
        ))}
    </Box>
  );
};
