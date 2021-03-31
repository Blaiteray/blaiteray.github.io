let i;
const dispValue = ["-webkit-flex", "flex"];

const button3 = document.getElementById("button3");
const projectList = document.getElementById("project-list");
const homeMid = document.getElementById("homeMid");
const contMid = document.getElementById("contMid");
const logoName = document.getElementById("logo-name");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

logoName.onclick = () => {
  for (i = 0; i < 2; i++) {
    homeMid.style.display = dispValue[i];
    if (window.getComputedStyle(logoName).display === dispValue[i]) break;
  }
  contMid.style.display = "none";
};

button1.onclick = () => {
  for (i = 0; i < 2; i++) {
    homeMid.style.display = dispValue[i];
    if (window.getComputedStyle(logoName).display === dispValue[i]) break;
  }
  contMid.style.display = "none";
};

button2.onclick = () => {
  homeMid.style.display = "none";
  for (i = 0; i < 2; i++) {
    contMid.style.display = dispValue[i];
    if (window.getComputedStyle(logoName).display === dispValue[i]) break;
  }
};

button3.onclick = () => {
  projectList.style.display =
    projectList.style.display != "none" ? "none" : "grid";
};

window.onclick = (event) => {
  if (!event.target.matches("#button3")) {
    projectList.style.display = "none";
  }
};
