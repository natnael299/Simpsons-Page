import { cxcs } from "../scripts/utils.js";

const homesContainer = document.getElementById("charactersC");
const inputEle = document.querySelector(".inputEle");
const inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", filterCxc);
inputEle.addEventListener("input", filterCxc);
const dialogEle = document.querySelector(".dialog");

//filter a characther or return all
function filterCxc() {
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
filterCxc();

//return the html ele for the filtered or full cxc array
function setUpHTML(array) {
  let html = "";
  array.forEach((l) => {
    html += `
      <div class="cxc">
            <img src=${l.thumbnail} alt=${l.name}/>
              <h2 class="owner">${l.name} </h2>
              <button class='checkBtn' data-cxc-id=${l.id}>Explore</button>
          </div>
  `;
  });
  return html;
}

//open the dialog and show the content of the selected cxc.
const exploreBtn = document.querySelectorAll(".checkBtn");
exploreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.cxcId;
    window.location.href = `./cxcDetail.html?id=${id}`;
  });
});
