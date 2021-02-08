var button3 = document.querySelector("#button3");
var projectList = document.querySelector(".project-list");
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
