// script.js
const projects = [
    {
      name: "Portfolio Website",
      url: "https://github.com/sethis8/xynox19.github.io"
    },
    {
      name: "Data Analysis CW - Pandas/Dask",
      url: "https://github.coventry.ac.uk/sethis8/data-science-cw"
    },
    {
      name: "Website for Animal Conservation (WIP)",
      url: "https://github.coventry.ac.uk/douses/KomodoHub"
    }
  ];
  
  const projectList = document.getElementById("project-list");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
  
    const link = document.createElement("a");
    link.href = project.url;
    link.textContent = project.name;
    link.target = "_blank";
  
    card.appendChild(link);
    projectList.appendChild(card);
  });
  