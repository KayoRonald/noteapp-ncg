import { GetStaticProps } from 'next'
import { Heading, Center } from "@chakra-ui/react";
import getConfig from 'next/config'
import axios from 'axios';
import { ArrayDataProps, NoteProps } from '@/types';
import { NoteList } from '@/components/Note/NoteList';
import React from 'react';
const { publicRuntimeConfig } = getConfig()

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get<ArrayDataProps>(`${publicRuntimeConfig.apiURL}/note`)
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

export default function Home({data}: ArrayDataProps) {
  return (
    <>
      <NoteList data={data} />
    </>
  )
}