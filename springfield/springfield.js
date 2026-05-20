import { locations } from "../scripts/utils.js";

const homesContainer = document.getElementById("homes");
const inputEle = document.querySelector(".inputEle");
const inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", filterHouse);
inputEle.addEventListener("input", filterHouse);

function filterHouse() {
  const searchTerm = inputEle.value.toLowerCase();
  if (searchTerm == "") {
    homesContainer.innerHTML = setUpHTML(locations);
    return;
  }
  const filteredL = locations.filter((l) =>
    l.name.toLowerCase().includes(searchTerm),
  );

  homesContainer.innerHTML = setUpHTML(filteredL);
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
               ${l.fullDescription} 
              </p>
              <a class='checkBtn' href='gallary.html?id=${l.id}'>check out the house</a>
            </div>
          </div>
  `;
  });
  return html;
}
