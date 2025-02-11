import React, { useState, useContext } from "react";
import Button from "../components/Button";
import { BsCheckCircle } from "react-icons/bs";
// import { addNote } from "../utils/local-data";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

function AddNotes() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { locale } = useContext(LocaleContext);

  const onTitleInputHandler = (event) => {
    setTitle(event.target.textContent.trim());
  };

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML.trim());
  };

  async function handleSaveNote() {
    const noteTitle = title ? title : "(untitled)";
    const noteBody = body ? body : "(untitled)";
    const { error } = await addNote({ title: noteTitle, body: noteBody });
    console.log(error);
    if (!error) {
      navigate("/");
    }
  }

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
