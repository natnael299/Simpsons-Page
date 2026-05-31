import { cxcs } from "./scripts/utils.js";

const infoBtn = document.querySelector(".infoBtn");
const memesBtn = document.querySelector(".memesBtn");
const infoConatiner = document.querySelector(".info");
const memesConatiner = document.querySelector(".memes");
const imgContainer = document.querySelector(".imgContainer");
const memeDialog = document.querySelector("#memeDialog");
const closeMemeDialog = document.querySelector(".closeMemeDialog");
const dialogImageClass = "dialogMemeImage";

function setActiveTab(tab) {
  const showInfo = tab === "info";
  infoConatiner.classList.toggle("hide", !showInfo);
  memesConatiner.classList.toggle("hide", showInfo);
  infoBtn.classList.toggle("current", showInfo);
  memesBtn.classList.toggle("current", !showInfo);
}

closeMemeDialog.addEventListener("click", () => memeDialog.close());
infoBtn.addEventListener("click", () => setActiveTab("info"));
memesBtn.addEventListener("click", () => setActiveTab("memes"));

const urlParam = new URLSearchParams(document.location.search);
const id = urlParam.get("id");
const selectedCxc = cxcs.find((cxc) => cxc.id == id) ?? cxcs[0];

const audioHtml =
  selectedCxc.audio.length > 0
    ? selectedCxc.audio
        .map((a) => `<audio controls preload="none" src="${a}"></audio>`)
        .join("")
    : "<p>Audio not available</p>";
imgContainer.innerHTML = `<img src=${selectedCxc.thumbnail} alt=${selectedCxc.name}>`;
infoConatiner.innerHTML = `
     <h1>${selectedCxc.name}</h1>
     <p><strong>role:</strong>   ${selectedCxc.role}</p>
     <div class="audioConatiner">
       ${audioHtml}
     </div>
     <p class=''>${selectedCxc.fullDescription}</p>
`;

if (selectedCxc.memes.length > 0) {
  memesConatiner.innerHTML = selectedCxc.memes
    .map(
      (m) => `
    <div data-image-id=${m.id} class='memeContainer'>
      <img src=${m.path} alt="${selectedCxc.name} meme">
    </div>
    `,
    )
    .join("");

  function displayMeme(id) {
    const selectedMeme =
      selectedCxc.memes.find((m) => m.id == id) ?? selectedCxc.memes[0];

    const oldPreview = memeDialog.querySelector(`.${dialogImageClass}`);
    if (oldPreview) oldPreview.remove();

    closeMemeDialog.insertAdjacentHTML(
      "afterend",
      `<img class="${dialogImageClass}" src="${selectedMeme.path}" alt="${selectedCxc.name} meme">`,
    );
    memeDialog.showModal();
  }

  memesConatiner.addEventListener("click", (event) => {
    const card = event.target.closest(".memeContainer");
    if (!card) return;
    displayMeme(card.dataset.imageId);
  });
} else {
  memesConatiner.innerHTML += `<h2>No memes available</h2>`;
}

setActiveTab("info");
