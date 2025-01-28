import React, { Component } from "react";
import Button from "../components/Button";
import { BsCheckCircle } from "react-icons/bs";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function AddNoteWrapper() {
  const navigate = useNavigate();
  return <AddNote navigate={navigate} />;
}

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleInputHandler = this.onTitleInputHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
  }

  onTitleInputHandler(event) {
    this.setState({ title: event.target.textContent.trim() });
  }

  onBodyInputHandler(event) {
    this.setState({ body: event.target.innerHTML.trim() });
  }

  handleSaveNote() {
    const { title, body } = this.state;
    const noteTitle = title ? title : "(untitled)";
    const noteBody = body ? body : "(untitled)";
    addNote({ title: noteTitle, body: noteBody });
    this.props.navigate("/");
  }

  render() {
    const { body, title } = this.state;

    return (
      <div className="Add-wrapper">
        <div
          className={`add-notes-title ${title === "" ? "placeholder" : ""}`}
          contentEditable
          onInput={this.onTitleInputHandler}
          data-placeholder-title="Title Notes"
          style={{
            padding: "10px",
            minHeight: "100px",
            outline: "none",
            position: "relative",
          }}
        />
        <div
          className={`add-notes-body ${body === "" ? "placeholder" : ""}`}
          contentEditable
          onInput={this.onBodyInputHandler}
          data-placeholder="Write Something here."
          style={{
            padding: "10px",
            minHeight: "200px",
            marginBottom: "20px",
            outline: "none",
            position: "relative",
          }}
        />
        <div className="action-button">
          <Button
            onClick={this.handleSaveNote}
            icon={<BsCheckCircle size={50} />}
          />
        </div>
      </div>
    );
  }
}

AddNote.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default AddNoteWrapper;
