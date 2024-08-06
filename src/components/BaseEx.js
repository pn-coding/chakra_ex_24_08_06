import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const BaseEx = () => {
  return (
    <>
      <Box
        w={"300px"}
        h={300}
        bgColor={"salmon"}
        _hover={{ bgColor: "green.500" }}
      >
        <Text>차크라 UI 짱편해~! 우와아~~</Text>
        <Heading>타이틀!</Heading>
      </Box>

      <Flex w={1200} justifyContent={"space-between"}>
        <Box width={200} height={200} bgColor={"lightblue"}>
          1
        </Box>
        <Box width={200} height={200} bgColor={"lightblue"}>
          2
        </Box>
        <Box width={200} height={200} bgColor={"lightblue"}>
          3
        </Box>
      </Flex>

      {/* <VStack
        spacing={50}
        w={200}
        h={1200}
        bgColor={"red.500"}
        justifyContent={"space-between"}
      >
        <Box width={200} height={200} bgColor={"lightblue"}>
          1
        </Box>
        <Box width={200} height={200} bgColor={"lightblue"}>
          2
        </Box>
        <Box width={200} height={200} bgColor={"lightblue"}>
          3
        </Box>
      </VStack> */}

      <Button variant={"ghost"}>버튼!!</Button>
    </>
  );
};
