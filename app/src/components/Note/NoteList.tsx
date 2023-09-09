import * as React from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { ArrayDataProps, NoteProps } from "@/types";
import NotContent from "./NotContent";

export const NoteList: React.FC<ArrayDataProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNote, setSelectedNote] = React.useState<NoteProps>();

  return (
    <>
      {data.length ? (
       <p>Tem conteúdo</p>
      ) : (
        <NotContent />
      )}
    </>
  );
};