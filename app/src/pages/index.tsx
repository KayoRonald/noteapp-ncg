import { GetStaticProps } from 'next'
import { Heading, Center } from "@chakra-ui/react";
import getConfig from 'next/config'
import axios from 'axios';
const { publicRuntimeConfig } = getConfig()

export default function Home({data}: any) {
  console.log(data)
  return (
    <Center>
      <Heading>Olá, Mundo!</Heading>
    </Center>
  )
}

interface NoteProps {
  id: string;
  title: string;
  description: string;
}
interface IndexPageProps {
  data: NoteProps[];
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get<IndexPageProps>(`${publicRuntimeConfig.apiURL}/note`)
  return {
    props: {
      data:  data.data.map((note: NoteProps) => ({
        id: note.id,
        title: note.title,
        description: note.description
      }))
    }
  }
}