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

const logoName = document.getElementById("logo-name");
logoName.onclick = function () {
  location.href = "./index.html";
};

const button1 = document.getElementById("button1");
button1.onclick = function () {
  location.href = "./index.html";
};

const button2 = document.getElementById("button2");
button2.onclick = function () {
  location.href = "./contact.html";
};
