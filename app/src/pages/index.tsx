import { GetStaticProps } from 'next'
import getConfig from 'next/config'
import axios from 'axios';
import { NoteList } from '@/components/note';
import React from 'react';
import { NoteProps } from '@/types';
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
      notes: data
    }
  }
}

export default function Home({ data }: DataProps) {
  return (
    <>
      <NoteList data={data.data} />
    </>
  )
}