import { GetStaticProps } from 'next'
import getConfig from 'next/config'
import axios from 'axios';
import { NoteList } from '@/components/note';
import React from 'react';
import { NoteProps } from '@/types';
import Head from 'next/head';
const { publicRuntimeConfig } = getConfig()

interface ArrayDataProps { 
  data: NoteProps[];
}

interface DataProps { 
  data: ArrayDataProps
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get(`${publicRuntimeConfig.apiURL}/note`)

  return {
    props: {
      data
    },
    revalidate: 10, // In 10 seconds
  }
}

export default function Home({ data }: DataProps) {
  return (
    <>
      <Head>
        <title>Note</title>
      </Head>
      <NoteList note={data} />
    </>
  )
}