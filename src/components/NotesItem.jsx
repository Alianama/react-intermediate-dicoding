import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";

export default function NotesItem({ notes }) {
  const bodyText = notes.body
    ? notes.body.length > 100
      ? `${notes.body.substring(0, 100)}...`
      : notes.body
    : "";
  return (
    <div className="item-wrapper">
      <Link to={`/detail/${notes.id}`}>
        <div className="item" key={notes.id}>
          {parse(`<h2>${notes.title}</h2>`)}
          <p className="date">{showFormattedDate(notes.createdAt)}</p>
          {parse(`<p className="body-text">${bodyText}</p>`)}
        </div>
      </Link>
    </div>
  );
}

NotesItem.propTypes = {
  notes: PropTypes.object,
};
