import React, { useEffect } from "react";
import "./App.css";


function App() {
  useEffect(() => {
    loadLocal();
  }, []);

  // a note-block creation function:
  function createNote() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push("");
    localStorage.setItem("notes", JSON.stringify(notes));
    loadLocal();
  }

  // a delete note function
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadLocal();
  }
  
   // a save function
   function saveNotes(index, noteText) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes[index] = noteText;
    localStorage.setItem("notes", JSON.stringify(notes));
  }

   // a local-storage load function
   function loadLocal() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";

    notes.forEach((noteText, index) => {
      let noteContainer = document.createElement("div");
      noteContainer.className = "note-block";

      let noteContent = document.createElement("p");
      noteContent.className = "note-content";
      noteContent.setAttribute("contenteditable", "true");
      noteContent.textContent = noteText;
      noteContent.addEventListener("input", function () {
        saveNotes(index, this.textContent);
      });

      let deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.onclick = function () {
        deleteNote(index);
      };
      let deleteImg = document.createElement("img");
      deleteImg.src = "IMG/delete.png";
      deleteImg.alt = "Delete";
      deleteButton.appendChild(deleteImg);

      noteContainer.appendChild(noteContent);
      noteContainer.appendChild(deleteButton);

      notesContainer.appendChild(noteContainer);
    });
  }

  return (
    <div>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Notes-app</title>
    <div className='container'>
      <h1 className='notes'>Note-App <img className='note-icon' src='IMG/notes icon.jpg'></img></h1>
      <button className='create-button' onClick={createNote}>create notes</button>
      <div className='notes-container' id='notes-container'>
        <p className='note-content' id="noteInput" contentEditable='true'></p>
        <button className='delete-button' onClick={deleteNote}><img className='delete-icon' src='IMG/delete.png' alt='Delete' /></button>
      </div>
    </div>
  </div>
  );
}

export default App;