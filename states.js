const stats = {
  Title: "The Simpsons",
  Year: "1989–Present",
  Genre: "Animated Sitcom / Satire",
  Description:
    "A satirical look at American life through the eyes of the dysfunctional Simpson family, set in the fictional town of Springfield.",
  Creator: "Matt Groening",
  MainCast: [
    "Dan Castellaneta",
    "Julie Kavner",
    "Nancy Cartwright",
    "Yeardley Smith",
    "Hank Azaria",
  ],
  Runtime: "~22 min per episode",
  ImdbRating: 8.7,
  Network: "Fox Broadcasting Company",
};

const reviews = [
  {
    critic: "James Poniewozik",
    media: "TIME Magazine",
    review:
      "The Simpsons is the TV equivalent of Sgt. Pepper's Lonely Hearts Club Band. After it came along, nothing was the same, and it established a generation's cultural references and sensibility.",
    rating: "All-TIME 100 Best TV Shows",
  },
  {
    critic: "Ken Tucker",
    media: "Entertainment Weekly",
    review:
      "The Simpsons remains one of the most beloved shows in the history of TV. The American family at its most complicated, drawn as simple cartoons.",
    rating: "A+",
  },
  {
    critic: "Richard Zoglin",
    media: "TIME Magazine",
    review:
      "The show has a good deal of savvy wit. The Simpsons, however, is strangely off-putting much of the time. The drawings are grotesque without redeeming style or charm.",
    rating: null,
  },
  {
    critic: "Miles Klee",
    media: "Rolling Stone",
    review:
      "Lampooning everything from pop culture to consumerism to the sheer mediocrity of modern life, The Simpsons was most admired in the 1990s, during a run of iconic episodes that critics consider to be a high-water mark for television comedy of any kind.",
    rating: "#1 Best Sitcom of All Time",
  },
  {
    critic: "Alan Sepinwall & Matt Zoller Seitz",
    media: "Rolling Stone",
    review:
      "No family in American history has done more for this glorious and misbegotten country than the Simpsons, who single-handedly defined the 90s and truly great television.",
    rating: "#1 Greatest American TV Series",
  },
];

const overview = document.querySelector(".MovieOverview");
for (const [k, v] of Object.entries(stats)) {
  overview.innerHTML += `<div class='stateHolder'><span class='stateKey'>${k}</span> &rightarrow; <span class='stateValue'>${v}</div></div>`;
}

const comments = document.querySelector(".comments");

reviews.forEach((r) => {
  comments.innerHTML += `
  <div class='comment'>
    <p class='review'>${r.review}</p>
    ${r.rating ? `<p class='rating'>${r.rating}</p>` : ""}
    <p class='personal'>
      <span>${r.critic} - </span>
      <span>${r.media}</span>
    </p>
  </div>
  `;
});
