import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [NoteContent, changeNoteContent] = useState({
    title: "",
    content: "",
  });

  const [pressed, toggle] = useState(false);

  function handleClick(event) {
    props.onAdd(NoteContent);
    changeNoteContent({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    changeNoteContent((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function expandForm() {
    toggle(true);
  }

  return (
    <div>
      <form className="create-note">
        {pressed && (
          <input
            name="title"
            onChange={handleChange}
            value={NoteContent.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expandForm}
          onChange={handleChange}
          value={NoteContent.content}
          placeholder="Take a note..."
          rows={pressed ? 3 : 1}
        />
        <Zoom in={pressed}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
