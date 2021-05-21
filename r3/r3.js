//Elements from the DOM
const modalWindow = document.getElementById("modal-window"),
  body = document.querySelector("body");

const openModal = () => {
  modalWindow.className = "modal-window-open";
  //Se establece esta propiedad al body para que el usuario no pueda scrollear  mientras esta en la ventana modal.
  body.style.overflowY = "hidden";
};

const closeModal = () => {
  modalWindow.className = "modal-window-closed";
  //Se restablece el scrol una vez que el usuario cierra la ventana modal.
  body.style.overflowY = "scroll";
  const video = document.querySelector("video");
  //Al cerrar la ventana se reinicia el video y se pone en pausa para que  la siguiente vez que se abra arranque desde el principio
  video.currentTime = 0;
  video.pause();
};
