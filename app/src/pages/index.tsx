import { GetStaticProps} from 'next'
import { Heading, Center } from "@chakra-ui/react";
import getConfig from 'next/config'
import axios from 'axios';
const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Center>
      <Heading>Olá, Mundo!</Heading>
    </Center>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get(publicRuntimeConfig.apiURL)
  console.log(data)
  return { props: { data } }
}