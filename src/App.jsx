import { Box, Flex } from "@chakra-ui/react"
import { Navbar, BookList, BookForm } from "./components"

function App() {

  return (
    <>
      <Navbar />
      <Flex width={'100%'}>
        <Box width={'40%'} p={'1rem'}>
         <BookForm />
        </Box>
        <Box width={'60%'}>
          <BookList />
        </Box>
      </Flex>
    </>
  )
}

export default App
