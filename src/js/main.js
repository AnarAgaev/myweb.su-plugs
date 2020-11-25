document.addEventListener("DOMContentLoaded",() => {
  const body = document.body;
  let windowWidth = window.innerWidth;

  window.addEventListener('resize', (event) => {
    windowWidth = window.innerWidth;
  });
});