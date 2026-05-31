import { locations } from "../scripts/utils.js";

const homesContainer = document.getElementById("homes");
const inputEle = document.querySelector(".inputEle");
const inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", filterHouse);
inputEle.addEventListener("input", filterHouse);
/*
homesContainer.addEventListener("click", (event) => {
  const toggleBtn = event.target.closest(".toggleDescription");
  if (!toggleBtn) return;

  const homeCard = toggleBtn.closest(".home");
  if (!homeCard) return;

  const expanded = homeCard.classList.toggle("expanded");
  toggleBtn.textContent = expanded ? "show less" : "read more";
});

homesContainer.addEventListener("touchstart", (event) => {
  const homeCard = event.target.closest(".home");
  if (!homeCard) return;
  homeCard.classList.add("is-tapped");
});

homesContainer.addEventListener("touchend", (event) => {
  const homeCard = event.target.closest(".home");
  if (!homeCard) return;
  homeCard.classList.remove("is-tapped");
});
*/
function filterHouse() {
  const searchTerm = inputEle.value.toLowerCase();
  if (searchTerm == "") {
    homesContainer.innerHTML = setUpHTML(locations);
    return;
  }
  const filteredL = locations.filter((l) =>
    l.name.toLowerCase().includes(searchTerm),
  );

  homesContainer.innerHTML = filteredL.length
    ? setUpHTML(filteredL)
    : `<div class="emptyState"><h3>No locations found</h3><p>Try a different search term.</p></div>`;
}
filterHouse();

function setUpHTML(array) {
  let html = "";
  array.forEach((l) => {
    html += `
      <div class="home">
            <div class="thumbnailC">
              <img src=${l.thumbnail} />
            </div>
            <div class="homeContent">
              <h2 class="owner">${l.name} </h2>
              <p class="homeDescription">
               ${l.shortDescription} 
              </p>
              <a class='checkBtn' href='gallary.html?id=${l.id}'>check out the house</a>
            </div>
          </div>
  `;
  });
  return html;
}
