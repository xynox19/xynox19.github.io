// script.js
const projects = [
  {
    name: "Project One",
    url: "https://github.com/yourusername/project1"
  },
  {
    name: "Project Two",
    url: "https://github.com/yourusername/project2"
  },
  {
    name: "Project Three",
    url: "https://github.com/yourusername/project3"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const link = document.createElement("a");
  link.href = project.url;
  link.textContent = project.name;
  link.target = "_blank";
  projectList.appendChild(link);
});
