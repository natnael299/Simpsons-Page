import { cxcs } from "../scripts/utils.js";

const homesContainer = document.getElementById("charactersC");
const inputEle = document.querySelector(".inputEle");
const inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", filterHouse);
inputEle.addEventListener("input", filterHouse);

function filterHouse() {
  const searchTerm = inputEle.value.toLowerCase();
  if (searchTerm == "") {
    homesContainer.innerHTML = setUpHTML(cxcs);
    return;
  }
  const filteredL = cxcs.filter((l) =>
    l.name.toLowerCase().includes(searchTerm),
  );

  homesContainer.innerHTML = setUpHTML(filteredL);
}
filterHouse();

function setUpHTML(array) {
  let html = "";
  array.forEach((l) => {
    html += `
      <div class="cxc">
            <img src=${l.thumbnail} />
              <h2 class="owner">${l.name} </h2>
              <a class='checkBtn' href='gallary.html?id=${l.id}'>Explore</a>
          </div>
  `;
  });
  return html;
}
