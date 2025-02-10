import React, { useState } from "react";
import Button from "../components/Button";
import { BsCheckCircle } from "react-icons/bs";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleInputHandler = (event) => {
    setTitle(event.target.textContent.trim());
  };

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML.trim());
  };

  const handleSaveNote = () => {
    const noteTitle = title ? title : "(untitled)";
    const noteBody = body ? body : "(untitled)";
    addNote({ title: noteTitle, body: noteBody });
    navigate("/");
  };

  return (
    <div className="Add-wrapper">
      <div
        className={`add-notes-title ${title === "" ? "placeholder" : ""}`}
        contentEditable
        onInput={onTitleInputHandler}
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
        onInput={onBodyInputHandler}
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
        <Button onClick={handleSaveNote} icon={<BsCheckCircle size={50} />} />
      </div>
    </div>
  );
}

export default AddNotes;
