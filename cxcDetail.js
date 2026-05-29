import { cxcs } from "./scripts/utils.js";

const infoBtn = document.querySelector(".infoBtn");
const memesBtn = document.querySelector(".memesBtn");

const infoConatiner = document.querySelector(".info");
const memesConatiner = document.querySelector(".memes");

[infoBtn, memesBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    infoConatiner.classList.toggle("hide");
    memesConatiner.classList.toggle("hide");
  });
});

const urlParam = new URLSearchParams(document.location.search);
const id = urlParam.get("id");
console.log(id);
const selectedCxc = cxcs.find((cxc) => cxc.id == id) ?? cxc[0];
infoConatiner.innerHTML = `
<div class='dialogContent'>
   <img src=${selectedCxc.thumbnail} alt=${selectedCxc.name}>
   <div class='info'>
     <h2>${selectedCxc.name}</h2>
     <p><strong>role:</strong>   ${selectedCxc.role}</p>
     <p>${selectedCxc.fullDescription}</p>
   </div>
  </div>

`;
