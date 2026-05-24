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
    dispalyInfo(id);
  });
});

function dispalyInfo(id) {
  const cxc = cxcs.find((c) => c.id === id);
  dialogEle.innerHTML = `
  <button class='closeBtn' onclick='closeDialog()'><i class='fas fa-x'></i></button>
  <div class='dialogContent'>
   <img src=${cxc.thumbnail} alt=${cxc.name}>
   <div class='info'>
     <h2>${cxc.name}</h2>
     <p><strong>role:</strong>   ${cxc.role}</p>
     <p>${cxc.fullDescription}</p>
   </div>
  </div>
  `;

  dialogEle.showModal();
}

//close the dialog
window.closeDialog = function closeDialog() {
  dialogEle.close();
};
