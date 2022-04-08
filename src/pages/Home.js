import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import NotesList from "../components/NotesList";

function Home() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get("/api/notes", {
          headers: {
            Authorization: localStorage.getItem("access-token"),
          },
        });
        const newNotes = res.map((note) => {
          return {
            id: note._id,
            text: note.text,
            title: note.title,
            timestamp: note.updatedAt,
          };
        });
        setNotes(newNotes);
      } catch (error) {
        navigate("/login");
        console.log(error);
      }
    };
    fetchData();
  }, [navigate]);
  const addNote = async (title, text) => {
    try {
      const res = await axiosClient.post(
        "/api/notes",
        {
          user: localStorage.getItem("id"),
          title,
          text,
        },
        {
          headers: {
            Authorization: localStorage.getItem("access-token"),
          },
        }
      );
      setNotes([
        {
          id: res._id,
          title: res.title,
          text: res.text,
          timestamp: res.updatedAt,
        },
        ...notes,
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteNote = async (id) => {
    try {
      const res = await axiosClient.delete(`/api/notes/${id}`, {
        headers: {
          Authorization: localStorage.getItem("access-token"),
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="max-w-5xl mt-5 mx-auto px-4">
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
}

export default Home;
