import { checkToken } from '../../utilities/users-service';
import NoteItem from '../../components/NoteItem/NoteItem';

export default function NotesHistoryPage({ notes }) {
  let noteItem;
  if (notes.length > 0) {
    noteItem = notes.map((note, idx) => (
      <NoteItem note={note} key={idx} />
    ));
  } else noteItem = <h1>No Notes Yet!</h1>
  
  return (
    <>
      <h2>{noteItem}</h2>
    </>
  );
}