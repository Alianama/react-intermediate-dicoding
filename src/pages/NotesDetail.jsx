import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";
import Button from "../components/Button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdArchive } from "react-icons/io";
import { MdUnarchive } from "react-icons/md";
import useNote from "../hooks/useNotesDetail";
import LocaleContext from "../context/LocaleContext";

function NotesDetail() {
  const { id } = useParams();
  const { notes, handleArchive, handleUnarchive, handleDelete } = useNote(id);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    if (notes) {
      document.title = `${notes.title} - Detail`;
    }
  }, [notes]);

  if (!notes)
    return (
      <div className="no-data">
        {locale === "id" ? "Catatan Tidak Ditemukan" : "Note Not Found"}
      </div>
    );

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
                  ? handleUnarchive(notes.id)
                  : handleArchive(notes.id)
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
              onClick={() => handleDelete(notes.id)}
              icon={<RiDeleteBin5Fill size={50} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesDetail;
