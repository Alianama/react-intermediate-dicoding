import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";
import Button from "../components/Button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import PropTypes from "prop-types";

function NotesDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <NotesDetail navigate={navigate} id={id} />;
}

class NotesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: getNote(props.id) };
    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUnarchive = this.handleUnarchive.bind(this);
  }

  handleArchive(id) {
    const notes = getNote(id);
    archiveNote(id);
    this.props.navigate(notes.archived ? "/archive" : "/");
  }

  handleUnarchive(id) {
    unarchiveNote(id);
    this.props.navigate("/");
  }

  handleDelete(id) {
    const notes = getNote(id);
    deleteNote(id);
    this.props.navigate(notes.archived ? "/archive" : "/");
  }

  render() {
    const { notes } = this.state;
    if (!notes) return <div className="no-data">Data tidak ada.</div>;
    return (
      <div className="detail-container">
        <div className="detail-item" key={notes.id}>
          {parse(`<h2>${notes.title}</h2>`)}
          <p>{showFormattedDate(notes.createdAt)}</p>
          {parse(`<p>${notes.body}</p>`)}
          <div className="action-button">
            <div className="action">
              <Button
                title={notes.archived ? "Unarchive" : "Archive"}
                onClick={() =>
                  notes.archived
                    ? this.handleUnarchive(notes.id)
                    : this.handleArchive(notes.id)
                }
                icon={
                  notes.archived ? (
                    <MdUnarchive size={50} />
                  ) : (
                    <IoMdArchive size={50} />
                  )
                }
              />
              <Button
                title={"Delete"}
                onClick={() => this.handleDelete(notes.id)}
                icon={<RiDeleteBin5Fill size={50} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default NotesDetailWrapper;
