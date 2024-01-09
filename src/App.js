import React from "react";
import "./App.css";

let notes = document.querySelectorAll(".input-box");
const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML)
}

 createBtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true"); 
  img.src = "IMG/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})

 notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "img"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === 'p'){
    notes = document.querySelector(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})

function App() {
  return (
    <div>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Notes-app</title>
      <div className='container'>
        <h1>Notes</h1>
        <button className='btn'>create notes</button>
        <div className='notes-container'>
          <p contentEditable='true' className="input-box"><img src='IMG/delete.png' onClick={notesContainer}></img></p>
        </div>
      </div>
    </div>
  );
}

export default App;