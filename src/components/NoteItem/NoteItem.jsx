export default function NoteItem({ note }) {
  const date = new Date(note.createdAt).toLocaleDateString();
  return(
    <div className="NoteItem">
      <div>Note Created: {date}</div>
      <div>{note.text}</div>
    </div>
  );
}