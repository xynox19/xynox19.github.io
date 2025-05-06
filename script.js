// script.js
const projects = [
    {
      name: "Portfolio Website source code",
      url: "https://github.com/xynox19/xynox19.github.io"
    },
    {
      name: "Data Analysis CW - Pandas/Dask",
      url: "https://github.coventry.ac.uk/sethis8/data-science-cw"
    },
    {
      name: "Website for Animal Conservation (WIP)",
      url: "https://github.coventry.ac.uk/douses/KomodoHub"
    },
    {
      name: "IoT simulation using MQTT protocol (Smart Home Sim)",
      url: "https://github.coventry.ac.uk/4005CMD2324JANMAY/HRCTSS-HomeSystem"
    },
    {
      name: "Zork style text adventure game",
      url: "https://github.com/xynox19/aperture-text-game/tree/main"
    }
  ];
  
//project display
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
  
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll(".section");
  
    const getCurrentHeaderHeight = () => {
      return header.offsetHeight;
    };
  
    const updateScrollOffsets = () => {
      const headerHeight = getCurrentHeaderHeight();
      sections.forEach((section) => {
        section.style.scrollMarginTop = `${headerHeight + 5}px`;
      });
    };
  
l
  // Just update offsets once on load — no shrink behavior
updateScrollOffsets();

  
      // Wait for class change to apply, then update offsets
      requestAnimationFrame(updateScrollOffsets);
    });
  
    updateScrollOffsets();
  