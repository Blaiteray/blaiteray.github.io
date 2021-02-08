const button3 = document.querySelector("button3");
const projectList = document.querySelector("project-list");
button3.addEventListener("click", toggleDropdownVisibility());
const toggleDropdownVisibility = () => {
  projectList.style.display = "grid";
};
