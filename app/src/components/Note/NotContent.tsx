import { chakra, Link, Stack, Box, Button, useColorModeValue, Flex, Container } from '@chakra-ui/react';

const NotContent = () => {
  return (
    <Flex
      mt={6}
      minH={"100vh"} justifyContent="center" align="center"
      py={{ base: '16', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Box
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        bg={useColorModeValue('white', 'gray.800')}
        p={{ base: 4, sm: 8 }}
        overflow="hidden"
        rounded="2xl"
      >
        <Stack direction="column" spacing={5} textAlign="left">
          <chakra.h1 fontSize="3xl" lineHeight={1.2} fontWeight="bold">
            Não tem conteúdo
          </chakra.h1>
          <chakra.h1 color="gray.400" fontSize="xl" maxW="600px" lineHeight={1.2}>
            Seja o primeiro a criar alguma anotação
          </chakra.h1>
          <Button
            w={"full"}
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: 'purple.600' }}
          >
            Criar anotação
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default NotContent;
