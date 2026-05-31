import { stats, reviews } from "./utils.js";

const overview = document.querySelector(".MovieOverview");
for (const [k, v] of Object.entries(stats)) {
  overview.innerHTML += `<div class='stateHolder'><span class='stateKey'>${k}</span> &rightarrow; <span class='stateValue'>${v}</div></div>`;
}

const comments = document.querySelector(".comments");

reviews.forEach((r) => {
  comments.innerHTML += `
  <a class='comment' href='${r.sourceLink}'>
    <p class='review'>${r.review}</p>
    ${r.rating ? `<p class='rating'>${r.rating}</p>` : ""}
    <p class='personal'>
      <span>${r.critic} - </span>
      <span>${r.media}</span>
    </p>
  </a>
  `;
});
