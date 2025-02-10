import React, { useState, useEffect } from "react";
import { getArchivedNotes } from "../utils/local-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import PropTypes from "prop-types";

const NotesListWrapper = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title"));
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const arcvhiveNotes = getArchivedNotes();
    setNotes(arcvhiveNotes);
  }, []);

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
    setTitle(keyword);
  };

  return (
    <NotesList
      pageName="Archive Notes"
      onSearch={changeSearchParams}
      activeKeyword={title}
      navigate={navigate}
      notes={notes}
    />
  );
};

NotesListWrapper.propTypes = {
  navigate: PropTypes.func,
  searchParams: PropTypes.object,
  title: PropTypes.string,
  notes: PropTypes.array,
  changeSearchParams: PropTypes.func,
};

export default NotesListWrapper;
