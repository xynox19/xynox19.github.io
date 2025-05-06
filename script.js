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
  
  const highlightSectionTitle = (id) => {
    const section = document.querySelector(id);
    if (!section) return;
  
    const title = section.querySelector("h2");
    if (!title) return;
  
    // Remove previous highlight in case it's still fading
    title.classList.remove("highlight");
  
    // Force reflow to restart animation
    void title.offsetWidth;
  
    // Apply highlight class
    title.classList.add("highlight");
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll(".section");
  
    const getShrinkedHeaderHeight = () => {
      header.classList.add("shrink");
      const height = header.offsetHeight;
      header.classList.remove("shrink");
      return height;
    };
  
    const updateScrollOffsets = () => {
      const targetHeight = getShrinkedHeaderHeight();
      sections.forEach((section) => {
        section.style.scrollMarginTop = `${targetHeight + 5}px`;
      });
    };
  
    // Shrink header on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  
    updateScrollOffsets();
  
    // Highlight title on hash change (navbar click)
    window.addEventListener("hashchange", () => {
      highlightSectionTitle(location.hash);
    });
  
    // Also handle initial load with hash
    if (location.hash) {
      setTimeout(() => highlightSectionTitle(location.hash), 300);
    }
  });
  