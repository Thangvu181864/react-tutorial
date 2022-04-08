import React, { useState } from "react";

function AddNote(props) {
  const { addNote } = props;
  const [noteText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const characterLimit = 200;
  const hanlderSave = () => {
    if (noteText.trim()) {
      addNote(title.trim(), noteText.trim());
      setNoteText("");
      setTitle("");
    }
  };
  return (
    <div className="bg-green-400 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="bg-transparent outline-none placeholder:text-xl placeholder:text-slate-100"
        placeholder="Title..."
      />
      <hr className="bg-slate-300" />
      <textarea
        value={noteText}
        onChange={(e) => {
          if (characterLimit - noteText.length > 0) {
            setNoteText(e.target.value);
          }
        }}
        className="resize-none bg-transparent outline-none placeholder:text-slate-100"
        rows={6}
        cols={10}
        placeholder="Type to add a note..."
      ></textarea>
      <div className="flex align-center justify-between">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="cursor-pointer" onClick={hanlderSave}>
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
          >
            <path d="M362.7 64h-256C83 64 64 83.2 64 106.7v298.7c0 23.5 19 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7v-256L362.7 64zM256 405.3c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM320 192H106.7v-85.3H320V192z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AddNote;
