import React from "react";
import moment from "moment";
function Note(props) {
  const { title, text, timestamp, id, deleteNote } = props;
  return (
    <div className=" bg-green-400 rounded-xl p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      <div>
        <span className="text-lg block text-center">{title}</span>
        <hr className="bg-slate-300" />
        <span className="block">{text}</span>
      </div>
      <div className="flex align-center justify-between">
        <small>{moment(timestamp).format("h:mm:ss A - DD/MM/YYYY")}</small>
        <button className="cursor-pointer" onClick={() => deleteNote(id)}>
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Note;
