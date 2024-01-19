import React from "react";
import "./App.css";

// (Grouped by the following:
//   A create note-block function
//   A delete note-block function
//   A localStorage function
//   A updated page funtion
//   A save funtion
//   Other features

// constants
let notes = document.querySelectorAll(".input-box");
const notesContainer = document.querySelector('notes-container')

// a note-block creation function:
function createNote() {
  let inputBox = document.createElement('p');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  let deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function () {
    deleteNote(inputBox);
  };
  let img = document.createElement('img');
  img.src = 'IMG/delete.png';
  img.alt = 'Delete';
  deleteButton.appendChild(img);
  inputBox.appendChild(deleteButton);
  document.getElementById('notes-container').appendChild(inputBox);
}

// a delete note function
function deleteNote(noteElement) {
  let notesContainer = document.getElementById('notes-container');
  notesContainer.removeChild(noteElement);
}

// local-storage function
function manageNotes(){
  localStorage.setItem('notes', notesContainer.innerHTML);
  if (notesContainer.innerHTML === null) {
    return notesContainer;
   }else {notesContainer.innerHTML = localStorage.getItem('notes')
  }
}

// save function
function saveNotes(e) {
  if (e.target.tagnName === 'img'){
    e.target.parentElement.remove();
    manageNotes()
  }
  else if (e.target.tagnName === 'p'){
    notes = document.querySelector('.input-box');
    notes.forEach(nt => {
      nt.onKeyUp = function(){
        manageNotes()
      }
    })
  }
}

// linebreaker function
function lineBreaker() {
  if (Event === 'Enter'){
    document.execCommand('insertLineBreak');
    Event.preventDefault();
  }
}

function App() {
  return (
    <div>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Notes-app</title>
    <div className='container'>
      <h1 className='notes'>Notes</h1>
      <button className='create-button' onClick={createNote}>create notes</button>
      <div className='notes-container' id='notes-container'>
        <p contentEditable='true' className='input-box'>
          <button className='delete-button' onClick={deleteNote}><img src='IMG/delete.png' alt='Delete' /></button>
        </p>
      </div>
    </div>
  </div>
  );
}

export default App;