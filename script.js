const toggleButton = document.querySelector(".container button");
const noteText = document.querySelector(".note-text");
const noteList = document.getElementById("list-container");

toggleButton.addEventListener("click", () => {
  addNotes();
});

noteList.addEventListener(
  "click",
  function (e) {
    if (
      e.target.tagName === "IMG" &&
      e.target.classList.contains("delete-button")
    ) {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function addNotes() {
  const li = document.createElement("li");
  const id = noteList.children.length;
  li.innerHTML = `
    <div class="note-text">
      <textarea placeholder="Type your text here..." id = ${id}></textarea>
      <img src="images/delete.png" alt="Delete" class="delete-button" />
    </div>
  `;

  noteList.appendChild(li);
  saveData();
}

function saveData() {
  localStorage.setItem("data", noteList.innerHTML);
}

function showTask() {
  noteList.innerHTML = localStorage.getItem("data");
}
showTask();