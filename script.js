"use strict";

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

function addTodo() {
  const text = input.value.trim(); // tar bort mellanslag

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Skapa "Ta bort"-knapp
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Ta bort";
  removeBtn.className = "removeBtn";

  // Klick = ta bort raden
  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  // Lägg knappen i raden
  li.appendChild(removeBtn);

  // Lägg raden i listan
  list.appendChild(li);

  // Rensa input
  input.value = "";
  input.focus();
}

// Klick på "Lägg till"
addBtn.addEventListener("click", addTodo);

// Enter i inputfältet
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
