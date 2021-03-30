"use strict";
// 1. Select all elements on the page
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");

openModalButton.addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

function closeModal() {
  overlay.classList.remove("open");
  modal.classList.remove("open");
}

function openModal() {
  modal.classList.add("open");
  overlay.classList.add("open");
}
