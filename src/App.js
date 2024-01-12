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
  let img = document.createElement('img');
  img.src = 'IMG/delete.png';
}

// a note-block deletion function
function deleteNote() {
  
}

// local-storage  function
function saveStorage(){
  localStorage.setItem('container', notesContainer.innerHTML)
}

// updated page with notes funtion
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('container')
}
showNotes()

// save function
function saveNotes(e) {
  if (e.target.tagnName === 'img'){
    e.target.parentElement.remove();
    saveStorage()
  }
  else if (e.target.tagnName === 'p'){
    notes = document.querySelector('.input-box');
    notes.forEach(nt => {
      nt.onKeyUp = function(){
        saveStorage()
      }
    })
  }
}

// linebreaker function
function lineBreaker() {
  if (onkeydown === 'Enter'){
    document.execCommand('insertLineBreak');
  }
}

function App() {
  return (
    <div>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Notes-app</title>
      <div className='container'>
        <h1>Notes</h1>
        <button className='create-button' onClick={createNote()}>create notes</button>
        <div className='notes-container'>
          <p contentEditable='true' className='input-box'><button className='delete-button' onClick={deleteNote}><img src='IMG/delete.png' /></button></p>
        </div>
      </div>
    </div>
  );
}

export default App;