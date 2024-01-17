import * as React from "react";
import { Contentlist } from "./content-list";
import { NotContent } from "./note-list"
import { ArrayDataProps, NoteProps } from "@/types";

interface NoteLisProps {
  note: ArrayDataProps
}
export const NoteList:  React.FC<NoteLisProps> = ({ note }) => {
  return (
    <>
      {note?.data.length ? (
        <Contentlist data={note.data}/>
      ) : (
        <NotContent />
      )}
    </>
  );
};