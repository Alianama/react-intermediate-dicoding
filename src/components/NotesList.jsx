import React, { useState, useEffect, useContext } from "react";
import NotesItem from "./NotesItem";
import Button from "./Button";
import { IoMdAddCircleOutline } from "react-icons/io";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

const NotesList = ({ notes, activeKeyword, navigate, onSearch, pageName }) => {
  const [foundNotes, setFoundNotes] = useState([]);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    if (notes) {
      const filteredNotes = activeKeyword
        ? notes.filter((note) =>
            note.title.toLowerCase().includes(activeKeyword.toLowerCase())
          )
        : notes;
      setFoundNotes(filteredNotes);
    }
  }, [activeKeyword, notes]);

  const handleAdd = () => {
    navigate("/add");
  };

  const onSearchHandler = (keyword) => {
    if (notes) {
      const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFoundNotes(filteredNotes);
      onSearch(keyword);
    }
  };

  return (
    <div className="list-item-container">
      <SearchBar search={onSearchHandler} defaultKeyword={activeKeyword} />
      <h1>{pageName}</h1>
      <div className="list-item">
        {foundNotes.length > 0 ? (
          foundNotes.map((note) => <NotesItem key={note.id} notes={note} />)
        ) : (
          <p className="empty-notes">
            {locale === "id" ? "Tidak ada catatan" : "Notes not Found"}
          </p>
        )}
      </div>
      <div className="action-button">
        <Button onClick={handleAdd} icon={<IoMdAddCircleOutline size={60} />} />
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
  activeKeyword: PropTypes.string,
  navigate: PropTypes.func,
  onSearch: PropTypes.func,
  pageName: PropTypes.string,
};

export default NotesList;
