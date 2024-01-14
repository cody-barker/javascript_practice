// document.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });

const header = document.createElement("header");
document.body.appendChild(header);

const heading1 = document.createElement("h1");
heading1.innerHTML = "Welcome";
heading1.classList = "h1";
heading1.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(this);
});

header.appendChild(heading1);
