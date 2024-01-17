import { 
  Box, HStack, Icon
} from '@chakra-ui/react';
import { MdEdit, MdDelete } from 'react-icons/md'
import { useRouter } from "next/router";
import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()

interface ActionsButtonProps {
  id: string
}

export const Action = ({id}: ActionsButtonProps) => {
  const router = useRouter();
  const onDelete = (
    id: string,
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    handleDelete(id)
    e.stopPropagation();
  };

  async function handleDelete(id: string) {
    try {
      const c = await axios.delete(`${publicRuntimeConfig.apiURL}/note/${id}`)
      console.log(c)
    } catch (error) {
      console.log(error)
    }
  }

  return (
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
        onClick={e => onDelete(id, e)}
        />
      </HStack>
    </Box>
  )
}