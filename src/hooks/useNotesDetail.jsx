import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../utils/network-data";

const useNote = (id) => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function FetchNotes() {
      setLoading(true);
      try {
        const { error, data } = await getNote(id);
        if (error) {
          throw new Error("Error Fatch Data");
        }
        setNotes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    FetchNotes();
  }, [id]);

  async function handleArchive(id) {
    const { error } = await archiveNote(id);
    console.log(error);
    if (!error) {
      navigate("/");
    }
  }

  async function handleUnarchive(id) {
    const { error } = await unarchiveNote(id);
    console.log(error);
    if (!error) {
      navigate("/archive");
    }
  }
  async function handleDelete(id) {
    const { error } = await deleteNote(id);
    console.log(error);
    if (!error) {
      navigate(notes.archived ? "/archive" : "/");
    }
  }

  return { notes, loading, handleArchive, handleUnarchive, handleDelete };
};

export default useNote;
