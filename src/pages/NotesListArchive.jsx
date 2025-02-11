import React, { useState, useEffect, useContext } from "react";
import { getArchivedNotes } from "../utils/network-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

const NotesListWrapper = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title"));
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState();
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function FetchNotes() {
      setLoading(true);
      try {
        const { error, data } = await getArchivedNotes();
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
  }, []);
  useEffect(() => {
    document.title = locale === "id" ? "Arsip Catatan" : "Archive Notes";
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
        pageName={locale === "id" ? "Catatan Arsip" : "Archive Notes"}
        onSearch={changeSearchParams}
        activeKeyword={title}
        navigate={navigate}
        notes={notes}
      />
    );
  }
};

NotesListWrapper.propTypes = {
  navigate: PropTypes.func,
  searchParams: PropTypes.object,
  title: PropTypes.string,
  notes: PropTypes.array,
  changeSearchParams: PropTypes.func,
};

export default NotesListWrapper;
