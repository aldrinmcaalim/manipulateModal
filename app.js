"use strict";
// 1. Select all elements on the page
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("open");
  modal.classList.remove("open");
});

function addOpen(element) {
  element.classList.add("open");
}
