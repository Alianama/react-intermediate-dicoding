import React from "react";
import { getActiveNotes } from "../utils/local-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import PropTypes from "prop-types";
function NotesListWrapper() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const notes = getActiveNotes();

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return (
    <NotesList
      pageName={"Active Notes"}
      onSearch={changeSearchParams}
      activeKeyword={title}
      navigate={navigate}
      notes={notes}
    />
  );
}
NotesListWrapper.propTypes = {
  navigate: PropTypes.func,
  searchParams: PropTypes.object,
  title: PropTypes.string,
  notes: PropTypes.array,
  changeSearchParams: PropTypes.func,
};

export default NotesListWrapper;
