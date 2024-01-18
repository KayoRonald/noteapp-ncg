import * as React from "react";
import { Contentlist } from "./content-list";
import { NotContent } from "./note-list"
import { ArrayDataProps, NoteProps } from "@/types";

// interface ArrayDataProps { 
//   data: NoteProps[];
// }

// interface NoteLisProps {
//   note: ArrayDataProps
// }
export const NoteList:  React.FC<ArrayDataProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.length ? (
        <Contentlist data={data}/>
      ) : (
        <NotContent />
      )}
    </>
  );
};