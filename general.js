//the name & url for all the pages
const links = [
  { path: "./index.html", name: "Home" },
  { path: "./springfield.html", name: "Springfield" },
  { path: "./cxcs.html", name: "Characters" },
  { path: "./forum.html", name: "Forum" },
];
const navBarDesktop = document.querySelector(".navBarDesktop");
const mobileMenu = document.getElementById("mobileMenu");
let html = "";
links.forEach((l) => {
  html += `<a href='${l.path}'>${l.name}</a>`;
});
navBarDesktop.innerHTML = html;
mobileMenu.innerHTML += html;
