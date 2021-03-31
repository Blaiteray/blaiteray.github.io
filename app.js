let i;
const button3 = document.querySelector("#button3");
const projectList = document.querySelector(".project-list");
button3.addEventListener("click", toggleDropdownVisibility);

function toggleDropdownVisibility() {
  projectList.style.display =
    projectList.style.display != "none" ? "none" : "grid";
}

window.addEventListener("click", closeDropdown);
function closeDropdown(event) {
  if (!event.target.matches("#button3")) {
    projectList.style.display = "none";
  }
}

const homeMid = document.getElementById("homeMid");
const contMid = document.getElementById("contMid");

const dispValue = ["-webkit-flex", "flex"];

const logoName = document.getElementById("logo-name");
logoName.onclick = function () {
  for (i = 0; i < 2; i++) {
    homeMid.style.display = dispValue[i];
    if (window.getComputedStyle(logoName).display === dispValue[i]) break;
  }
  contMid.style.display = "none";
};

const button1 = document.getElementById("button1");
button1.onclick = function () {
  for (i = 0; i < 2; i++) {
    homeMid.style.display = dispValue[i];
    if (window.getComputedStyle(logoName).display === dispValue[i]) break;
  }
  contMid.style.display = "none";
};

const button2 = document.getElementById("button2");
button2.onclick = function () {
  homeMid.style.display = "none";
  for (i = 0; i < 2; i++) {
    contMid.style.display = dispValue[i];
    if (window.getComputedStyle(logoName).display === dispValue[i]) break;
  }
};
