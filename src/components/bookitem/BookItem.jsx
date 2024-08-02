import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
} from "@chakra-ui/react";

export const BookItem = ({ book }) => {
  return (
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
          <Box my={'0.8rem'}>{book.description}</Box>
          <Badge variant="outline" colorScheme="green">
            {book.assignedHistory[0].user}
          </Badge>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
