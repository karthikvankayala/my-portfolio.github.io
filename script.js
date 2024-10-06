function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function flipCard() {
    const container = document.querySelector('.details-container');
    container.classList.toggle('flip');
  }
  