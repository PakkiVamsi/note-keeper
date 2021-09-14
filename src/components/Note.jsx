import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button
        class="btn"
        type="submit"
        onClick={() => {
          // event.preventDefault();
          // console.log("gdfgfd");
          props.deleteNote(props.id);
        }}
      >
        <i class="fa fa-trash"></i>
      </button>
    </div>
  );
}

export default Note;
