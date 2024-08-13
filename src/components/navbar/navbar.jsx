import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const loginFunc = useAuthStore((state) => state.signIn)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)

  const handleLogin = () => {
    const payload = {
      email: "", 
      password: ""
    }

    loginFunc(payload)
  }

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={'1rem'}>
      <Box color={"#f05d5e"}>
        {" "}
        Book<span style={{ color: "#0f7173" }}>Buddy.{"/>"}</span>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={handleLogin}>Sign in</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box display={'flex'} alignItems={'center'} gap={'4'}>
        {
          isAuthenticated ? (<Box>{user.email}</Box>) : (<>
            <Button variant='solid' backgroundColor={'#0f7173'} color={'white'}>Sign Up</Button>
            <Button onClick={onOpen} variant='outline' borderColor={'#0f7173'} >Sign In</Button>
          </>)
        }
      </Box>
    </Box>
  );
};
