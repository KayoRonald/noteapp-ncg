import {
  Box, HStack, Icon, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { MdEdit, MdDelete } from 'react-icons/md'
const { publicRuntimeConfig } = getConfig()

type ActionButton = {
  id: string
  name: string
}

export const Action = (props: ActionButton) => {
  const router = useRouter();
  const toast = useToast()

  const onDelete = (
    id: string,
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    handleDelete(id)
    e.stopPropagation();
  };
  async function handleDelete(id: string) {
    const toastID = toast({
      title: `Excluindo "${props.name}"...`,
      status: 'loading'
    })
    try {
      await axios.delete(`${publicRuntimeConfig.apiURL}/note/${id}`)
      toast.update(toastID, {
        title: `Excluído com sucesso`,
        status: 'success'
      })
      router.replace(router.asPath);
    } catch (error: any) {
      console.log(error)
      toast.update(toastID, {
        title: `Erro ao excluir "${props.name}"`,
        description: error,
        status: 'error'
      })
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
        onClick={e => onDelete(props.id, e)}
        />
      </HStack>
    </Box>
  )
}