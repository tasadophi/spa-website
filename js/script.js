// selectors
const navItems = document.querySelectorAll(".nav__item");
const content = document.querySelector(".content");

import products from "./products.js";
import comments from "./comments.js";
import aboutus from "./aboutus.js";
import notfound from "./notfound.js";
import home from "./home.js";

// fucntions
function router() {
  const routes = [
    {
      url: "/products",
      src: products,
      btn: document.querySelector("#products"),
    },
    {
      url: "/comments",
      src: comments,
      btn: document.querySelector("#comments"),
    },
    { url: "/aboutus", src: aboutus, btn: document.querySelector("#aboutus") },
  ];
  const route = routes.find((item) => item.url === location.pathname);
  navItems.forEach((item) => {
    item.parentElement.classList.remove("selected");
  });
  if (route) {
    content.innerHTML = route.src();
    route.btn.classList.add("selected");
  } else if (location.pathname == "/") content.innerHTML = home();
  else content.innerHTML = notfound();
}

function routes(e) {
  e.preventDefault();
  window.history.pushState(null, null, e.target.href);
  router();
}

// events
navItems.forEach((item) => {
  item.addEventListener("click", routes);
});
window.addEventListener("popstate", () => router());
