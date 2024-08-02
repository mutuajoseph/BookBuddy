import { Box, Flex } from "@chakra-ui/react"
import { Navbar, BookList } from "./components"

function App() {

  return (
    <>
      <Navbar />
      <Flex width={'100%'}>
        <Box border={'2px solid red'} width={'40%'}>
          Form
        </Box>
        <Box border={'2px solid green'} width={'60%'}>
          <BookList />
        </Box>
      </Flex>
    </>
  )
}

export default App
