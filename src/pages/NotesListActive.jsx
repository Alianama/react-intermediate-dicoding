import React, { useState, useEffect, useContext } from "react";
import { getActiveNotes } from "../utils/network-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import LocaleContext from "../context/LocaleContext";

const NotesListWrapper = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title"));
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      try {
        const { error, data } = await getActiveNotes();
        if (error) {
          throw new Error("Error Fetch Data");
        }
        setNotes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, [getActiveNotes]);

  useEffect(() => {
    document.title = locale === "id" ? "Catatan Aktif" : "Active Notes";
  }, [locale]);

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
    setTitle(keyword);
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading..... </h1>
      </div>
    );
  } else {
    return (
      <NotesList
        pageName={locale === "id" ? "Catatan Aktif" : "Active Notes"}
        onSearch={changeSearchParams}
        activeKeyword={title}
        navigate={navigate}
        notes={notes}
      />
    );
  }
};

export default NotesListWrapper;
