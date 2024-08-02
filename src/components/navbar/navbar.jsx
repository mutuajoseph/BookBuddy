import { Box, Button } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={'1rem'}>
      <Box color={"#f05d5e"}>
        {" "}
        Book<span style={{ color: "#0f7173" }}>Buddy.{"/>"}</span>
      </Box>

      <Box display={'flex'} alignItems={'center'} gap={'4'}>
        <Button variant='solid' backgroundColor={'#0f7173'} color={'white'}>Sign Up</Button>
        <Button variant='outline' borderColor={'#0f7173'} >Sign In</Button>
      </Box>
    </Box>
  );
};
