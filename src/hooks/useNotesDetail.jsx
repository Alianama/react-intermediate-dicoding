import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";

const useNote = (id) => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState();

  useEffect(() => {
    const fetchNote = async () => {
      const note = await getNote(id);

      setNotes(note);
    };

    fetchNote();
  }, [id]);

  const handleArchive = (id) => {
    const notes = getNote(id);

    archiveNote(id);

    navigate(notes.archived ? "/archive" : "/");
  };

  const handleUnarchive = (id) => {
    unarchiveNote(id);

    navigate(notes.archived ? "/unarchive" : "/");
  };

  const handleDelete = (id) => {
    const notes = getNote(id);

    deleteNote(id);

    navigate(notes.archived ? "/archive" : "/");
  };

  return { notes, handleArchive, handleUnarchive, handleDelete };
};

export default useNote;
