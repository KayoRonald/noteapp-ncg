import * as React from "react";
import { 
  chakra, Link, Stack, Box, Button, useColorModeValue, 
  Flex, Container, Text, HStack, Icon, Heading, Center, Fade 
} from '@chakra-ui/react';
import { ArrayDataProps } from "@/types";
import { SimpleGrid } from "./grid";
import { MdEdit, MdDelete } from 'react-icons/md'


export const Contentlist: React.FC<ArrayDataProps> = ({
  data,
}) => {
  return (
    <Box minH={"70vh"}>
      <SimpleGrid mt={16}>
        {data.map(note => (
          <Fade in={true} key={note.id}>
            <Center py={2} px={2}>
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
                    <Box
                      _groupHover={{ display: "block" }}
                      display="none"
                    >
                      <HStack spacing="2">
                        <Icon
                          color={"green.500"}
                          _hover={{ color: "green.600" }}
                          _groupHover={{ display: "block" }}
                          as={MdEdit}
                          w={4}
                          h={4}
                        // onClick={e => onClick(note.id, e)}
                        />
                        <Icon
                          color={"green.500"}
                          _hover={{ color: "#ca364a" }}
                          _groupHover={{ display: "block" }}
                          as={MdDelete}
                          w={4}
                          h={4}
                        // onClick={e => onDelete(note.id, e)}
                        />
                      </HStack>
                    </Box>
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