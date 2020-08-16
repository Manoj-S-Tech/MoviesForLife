const addMovieModal = document.getElementById("add-modal");
const addBackdrop = document.getElementById("backdrop");
const startAddMovieButton = document.querySelector("header button");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleBackDrop = () => {
  addBackdrop.classList.toggle("visible");
};

const toggleAddMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const backdropClickHandler = () => {
  toggleAddMovieModal();
};

const toggleCancelMovieButton = () => {
  toggleAddMovieModal();
};

startAddMovieButton.addEventListener("click", toggleAddMovieModal);
addBackdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", toggleCancelMovieButton);
