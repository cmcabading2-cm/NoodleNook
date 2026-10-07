/* Noodle Nook — small interactions */

/* ---------- Featured bowl (hero) ----------
   Add, remove or reorder bowls here. The card in the
   bottom-right corner always previews the next one. */
const featured = [
  {
    name: "Black Garlic Tonkotsu",
    price: "Php 420",
    desc: "Creamy pork broth simmered for hours, springy noodles, torched chashu, jammy egg, nori, scallions, and house-made chili oil.",
    img: "assets/black-garlic-tonkotsu.png",
  },
  {
    name: "Classic Shoyu",
    price: "Php 325",
    desc: "Clear soy broth, chashu, corn, bean sprouts, narutomaki and a soft egg. The bowl that started it all.",
    img: "assets/classic-shoyu.png",
  },
  {
    name: "Spicy Miso",
    price: "Php 365",
    desc: "Creamy pork broth, torched chashu, jammy egg, and house chili oil, our crew’s pride.",
    img: "assets/spicy-miso.png",
  },
  {
    name: "Veggie Miso",
    price: "Php 295",
    desc: "Golden miso broth with crispy tofu, bok choy, shiitake, and edamame, all plant-powered goodness.",
    img: "assets/veggie-miso.png",
  },
];

const feature = document.querySelector(".hero__feature");
const featureName = document.querySelector("[data-feature-name]");
const featurePrice = document.querySelector("[data-feature-price]");
const featureDesc = document.querySelector("[data-feature-desc]");
const nextImg = document.querySelector("[data-next-img]");
const nextName = document.querySelector("[data-next-name]");
const nextPrice = document.querySelector("[data-next-price]");
let current = 0;

function showFeature(index) {
  current = (index + featured.length) % featured.length;
  const bowl = featured[current];
  const next = featured[(current + 1) % featured.length];

  feature.classList.add("is-changing");
  setTimeout(() => {
    featureName.textContent = bowl.name;
    featurePrice.textContent = bowl.price;
    featureDesc.textContent = bowl.desc;
    nextImg.src = next.img;
    nextName.textContent = next.name;
    nextPrice.textContent = next.price;
    feature.classList.remove("is-changing");
  }, 200);
}

document.querySelectorAll("[data-feature-next]").forEach((btn) =>
  btn.addEventListener("click", () => showFeature(current + 1))
);
document.querySelector("[data-feature-prev]").addEventListener("click", () => showFeature(current - 1));

/* ---------- Reviews ----------
   The first review is from the Figma design. The other two
   are placeholders: swap in real ones before launch. */
const reviews = [
  { quote: "“Brought my barkada here after work and we ended up staying for hours. The Spicy Miso has the perfect kick, and the staff treated us like family.”", name: "Ms. Erika L." },
  { quote: "“The black garlic tonkotsu is the richest bowl I’ve had in the city. I’m already planning my next visit.”", name: "Placeholder name" },
  { quote: "“Finally, a veggie ramen that doesn’t feel like an afterthought. The miso broth is so good.”", name: "Placeholder name" },
];

const reviewCard = document.querySelector(".reviews__card");
const reviewQuote = document.querySelector("[data-review-quote]");
const reviewName = document.querySelector("[data-review-name]");
let reviewIndex = 0;

function showReview(index) {
  reviewIndex = (index + reviews.length) % reviews.length;
  reviewCard.classList.add("is-changing");
  setTimeout(() => {
    reviewQuote.textContent = reviews[reviewIndex].quote;
    reviewName.textContent = reviews[reviewIndex].name;
    reviewCard.classList.remove("is-changing");
  }, 200);
}

document.querySelector("[data-review-next]").addEventListener("click", () => showReview(reviewIndex + 1));
document.querySelector("[data-review-prev]").addEventListener("click", () => showReview(reviewIndex - 1));

/* ---------- Add to order ---------- */
const cartCount = document.querySelector("[data-cart-count]");
const toast = document.querySelector("[data-toast]");
let items = 0;
let toastTimer;

document.querySelectorAll("[data-add]").forEach((btn) =>
  btn.addEventListener("click", () => {
    items += 1;
    cartCount.textContent = items;
    cartCount.hidden = false;

    toast.textContent = `${btn.dataset.add} added to your order`;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  })
);
