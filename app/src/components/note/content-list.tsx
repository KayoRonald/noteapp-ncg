import * as React from "react";
import { 
  Stack, Box, Flex, Text,Heading, Center, Fade 
} from '@chakra-ui/react';
import { ArrayDataProps } from "@/types";
import { SimpleGrid } from "./grid";
import { Action } from "./action";

export const Contentlist: React.FC<ArrayDataProps> = ({
  data,
}) => {
  return (
    <Box minH={"70vh"}>
      <SimpleGrid mt={16}>
        {data.map(note => (
            <Fade in={true}>
              <Center py={2} px={2} key={note.id}>
              <Box
                maxH={"400px"}
                w="100%"
                boxShadow={"lg"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                cursor="pointer"
                _hover={{ boxShadow: "xl" }}
                role="group"
              // onClick={() => handleClick(note.id, true)}
              >
                <Stack>
                  <Flex
                    _groupHover={{ justifyContent: "space-between" }}
                    justifyContent="center"
                    align="center"
                  >
                    <Box>
                      <Text
                        color={"green.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                      >
                        Note
                      </Text>
                    </Box>
                    <Action id={note.id} name={note.title}/>
                  </Flex>
                  <Heading
                    fontSize={"xl"}
                    fontFamily={"body"}
                    textTransform="capitalize"
                    noOfLines={2}
                  >
                    {note.title}
                  </Heading>

                  <Text
                    color={"gray.500"}
                    fontSize="md"
                    noOfLines={{ base: 3, md: 4 }}
                  >
                    {note.description}
                  </Text>
                </Stack>
              </Box>
            </Center>
            </Fade>
        ))}
      </SimpleGrid>
    </Box>
  )
}