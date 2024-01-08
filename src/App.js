import './App.css';

let notes = document.querySelectorAll(".input-box");

 function createBtn() {
  const createBtn = document.querySelector(".btn");
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditabel", "true");
  img.src = "IMG/delete.png";
  notesContainer.appendChild(inputBox);
}

function notesContainer (e){
  const notesContainer = document.querySelector(".notes-container");
  if(e.target.tagName === "img"){
    e.target.parentElement.remove();
  }
}

function App() {
  return (
    <div>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <title>Notes-app</title>
      <div className='container'>
        <h1>Notes</h1>
        <button className='btn'>create notes</button>
        <div className='notes-container'>
          <p contentEditable='true' class='input-box'>
            <img src='IMG/delete.png' onClick={createBtn}></img>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
