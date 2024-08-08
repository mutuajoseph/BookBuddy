import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { fetchBookById } from "../../services";
import { useState } from "react";

export const BookItem = ({ book }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fetchedBook, setFetchedBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleViewMoreClick = async () => {
    // fetching the book by ID
    onOpen();
    setLoading(true);
    const response = await fetchBookById(book.id);

    if (response) {
      setLoading(false);
      setFetchedBook(response);
    }
    // RENDER THE MODAL & DISPLAY THE INFORMATION
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {fetchedBook ? fetchedBook.title + " - " + fetchedBook.author : "No result"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading ? (
              <Spinner />
            ) : (
              <>
                {fetchedBook ? (
                  <Box>
                    <Text fontWeight={"bold"}>Description</Text>
                    <Text>{fetchedBook.description}</Text>

                    <Box py={4} display={'flex'} justifyContent={'start'} gap={4}>
                      {fetchedBook.assignedHistory.map((item, index) => (
                        <Box key={index}>
                          <Badge variant="outline" colorScheme="green">
                            {item.user} - {item.assignedDate}
                          </Badge>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ) : (
                  <>Book NOT FOUND</>
                )}
              </>
            )}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {book.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box my={"0.8rem"}>{book.description}</Box>
            <Badge variant="outline" colorScheme="green">
              {book.assignedHistory[0].user}
            </Badge>

            <Button onClick={handleViewMoreClick} size={"sm"} mx={2}>
              View More details
            </Button>

            <Button onClick={handleViewMoreClick} size={"sm"} mx={2}>
              Edit
            </Button>

            <Button onClick={handleViewMoreClick} size={"sm"} mx={2}>
              Delete
            </Button>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
