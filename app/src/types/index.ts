export interface NoteProps {
  id: string;
  title: string;
  description: string;
}

export interface ArrayDataProps { 
  data: NoteProps[];
}