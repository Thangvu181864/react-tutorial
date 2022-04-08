import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NotesList(props) {
  const { notes, addNote, deleteNote } = props;
  return (
    <div className=" grid gap-4 grid-cols-autofit">
      <AddNote addNote={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          timestamp={note.timestamp}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NotesList;
