import { cxcs } from "./scripts/utils.js";

const infoBtn = document.querySelector(".infoBtn");
const memesBtn = document.querySelector(".memesBtn");

const infoConatiner = document.querySelector(".info");
const memesConatiner = document.querySelector(".memes");
const imgContainer = document.querySelector(".imgContainer");

[infoBtn, memesBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    infoConatiner.classList.toggle("hide");
    memesConatiner.classList.toggle("hide");
    infoBtn.classList.toggle("current");
    memesBtn.classList.toggle("current");
  });
});

const urlParam = new URLSearchParams(document.location.search);
const id = urlParam.get("id");
console.log(id);
const selectedCxc = cxcs.find((cxc) => cxc.id == id) ?? cxcs[0];
const audioHtml =
  selectedCxc.audio.length > 0
    ? selectedCxc.audio
        .map((a) => `<audio controls src="${a}"></audio>`)
        .join("")
    : "<p>Audio not available</p>";
imgContainer.innerHTML = `<img src=${selectedCxc.thumbnail} alt=${selectedCxc.name}>`;
infoConatiner.innerHTML = `
     <h1>${selectedCxc.name}</h1>
     <p><strong>role:</strong>   ${selectedCxc.role}</p>
     <div>
       ${audioHtml}
     </div>
     <p class=''>${selectedCxc.fullDescription}</p>
`;
