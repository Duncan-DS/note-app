import React from "react";
import "./App.css";


function App() {
  
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
  let noteContainer = document.createElement('div');
  noteContainer.className = 'note-block';

  let noteContent = document.createElement('p');
  noteContent.className = 'note-content';
  noteContent.setAttribute('contenteditable', 'true');

  let deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function () {
    deleteNote(noteContainer);
  };
  let deleteImg = document.createElement('img');
  deleteImg.src = 'IMG/delete.png';
  deleteImg.alt = 'Delete';
  deleteButton.appendChild(deleteImg);

  let saveButton = document.createElement('button');
  saveButton.className = 'save-button';
  saveButton.onclick = function () {
    saveNotes(noteContainer);
  };
  saveButton.textContent = 'Save';

  noteContainer.appendChild(noteContent);
  noteContainer.appendChild(deleteButton);
  noteContainer.appendChild(saveButton);

  document.getElementById('notes-container').appendChild(noteContainer);
}

// a delete note function
function deleteNote(noteElement) {
  let notesContainer = document.getElementById('notes-container');
  notesContainer.removeChild(noteElement);
}

// a save function
function saveNotes(noteContainer) {
  let noteInput = noteContainer.querySelector('.note-content').textContent.trim();;

  if (noteInput !== '') {
    localStorage.setItem('notes', noteInput);
    alert('Note saved successfully!');
  } else {
    alert('Please enter a note.');
  }
}

// a local-storage load function
function loadLocal() {
  var notes = localStorage.getItem('notes');

    var notesContainer = document.getElementById('notes-container');
    var storedNotes = notes.split('|'); 

    storedNotes.forEach(function(noteText) {
      var noteContainer = document.createElement('div');
      noteContainer.className = 'note-block';

      var noteContent = document.createElement('p');
      noteContent.className = 'note-content';
      noteContent.setAttribute('contenteditable', 'true');
      noteContent.textContent = noteText; // Set the note text

      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.onclick = function() {
        deleteNote(noteContainer);
      };
      var deleteImg = document.createElement('img');
      deleteImg.src = 'IMG/delete.png';
      deleteImg.alt = 'Delete';
      deleteButton.appendChild(deleteImg);

      var saveButton = document.createElement('button');
      saveButton.className = 'save-button';
      saveButton.onclick = function() {
        saveNotes(noteContainer);
      };
      saveButton.textContent = 'Save';

      noteContainer.appendChild(noteContent);
      noteContainer.appendChild(deleteButton);
      noteContainer.appendChild(saveButton);

      notesContainer.appendChild(noteContainer);
    });
}

  window.onload = function () {
    loadLocal();
  }

  return (
    <div>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Notes-app</title>
    <div className='container'>
      <h1 className='notes'>Notes</h1>
      <button className='create-button' onClick={createNote} >create notes</button>
      <div className='notes-container' id='notes-container'>
        <p contentEditable='true' className='input-box' id="noteInput">Please create a note above and happy typing!</p>
        <button className='delete-button' onClick={deleteNote}><img src='IMG/delete.png' alt='Delete' /></button>
        <button className='save-button' onClick={saveNotes}>Save</button>
      </div>
    </div>
  </div>
  );
}

export default App;