import { locations } from "./scripts/utils.js";

const urlParam = new URLSearchParams(document.location.search);
const id = urlParam.get("id");

const selectedLocation = locations.find((location) => location.id == id) ?? locations[0];
const container = document.querySelector(".container");

document.title = `${selectedLocation.name} | Gallery`;

const galleryMarkup = `
	<main class="galleryPage">
		<section class="galleryHero">
			<div class="galleryHeroMedia">
				<img src="${selectedLocation.coverImage}" alt="${selectedLocation.name}" />
			</div>
			<div class="galleryHeroCopy">
				<p class="galleryEyebrow">${selectedLocation.shortDescription}</p>
				<h1>${selectedLocation.name}</h1>
				<p>${selectedLocation.fullDescription}</p>
			</div>
		</section>

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
