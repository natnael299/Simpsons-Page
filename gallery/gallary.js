import { locations } from "../scripts/utils.js";

const urlParam = new URLSearchParams(document.location.search);
const id = urlParam.get("id");

const selectedLocation =
  locations.find((location) => location.id == id) ?? locations[0];
const container = document.querySelector(".container");

document.title = `${selectedLocation.name} | Gallery`;

const galleryMarkup = `
	<main class="galleryPage">
		<section class="galleryHero">
			<div class="galleryHeroMedia">
				<img src="${selectedLocation.coverImage}" alt="${selectedLocation.name}" />
			</div>
			<div class="galleryHeroCopy">
				<p class="galleryEyebrow"><i class='fas fa-location-dot'></i> ${selectedLocation.tag}</p>
				<h1>${selectedLocation.name}</h1>
				<p>${selectedLocation.fullDescription}</p>
				<a href='./springfield.html'>&leftarrow;  Back to Springfield</a>
			</div>
		</section>

		<h1 class='galleryHeader'> ${selectedLocation.name} Gallery</h1>
		<section class="galleryGrid" aria-label="${selectedLocation.name} image gallery">
			${selectedLocation.gallery
        .map(
          (item) => `
						<figure class="galleryCard">
							<img src="${item.image}" alt="${item.alt}" ${item.fullscreen ? 'data-fullscreen="true"' : ""} />
							<figcaption>${item.title}</figcaption>
						</figure>
					`,
        )
        .join("")}
		</section>
	</main>
`;

container.insertAdjacentHTML("beforeend", galleryMarkup);

const galleryGrid = document.querySelector(".galleryGrid");
const fullscreenDialog = document.createElement("dialog");
fullscreenDialog.className = "fullscreenDialog";
fullscreenDialog.innerHTML = `
	<div class="dialogInner">
		<button class="closeFullscreen" type="button" aria-label="Close image viewer">x</button>
		<img src="" alt="Fullscreen gallery image" />
	</div>
`;

container.appendChild(fullscreenDialog);

const fullscreenImage = fullscreenDialog.querySelector("img");
const closeFullscreen = fullscreenDialog.querySelector(".closeFullscreen");

closeFullscreen.addEventListener("click", () => fullscreenDialog.close());

galleryGrid.addEventListener("click", (event) => {
	const image = event.target.closest("img[data-fullscreen='true']");
	if (!image) return;

	fullscreenImage.src = image.src;
	fullscreenImage.alt = image.alt;
	fullscreenDialog.showModal();
});
