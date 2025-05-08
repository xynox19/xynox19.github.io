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
    name: "GCSE NEA - Zork-styled text adventure game",
    url: "https://github.com/xynox19/aperture-text-game/tree/main",

    name: "GCSE NEA - Membership system",
    url: "https://github.com/xynox19/membership-system-NEA"
  }
];

// Project display
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

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").substring(1); // e.g. "projects"
      const targetSection = document.getElementById(targetId);
      const targetHeading = targetSection?.querySelector("h2");

      if (targetHeading) {
        targetHeading.classList.add("highlight");
        setTimeout(() => {
          targetHeading.classList.remove("highlight");
        }, 1000); // highlight lasts for 1 second
      }
    });
  });

  const navLinks = document.querySelectorAll("nav a");

  const getCurrentHeaderHeight = () => {
    return header.offsetHeight;
  };

  const updateScrollOffsets = () => {
    const headerHeight = getCurrentHeaderHeight();
    sections.forEach((section) => {
      section.style.scrollMarginTop = `${headerHeight + 5}px`;
    });
  };

  updateScrollOffsets();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    setTimeout(updateScrollOffsets, 300);
  });

  window.addEventListener("resize", updateScrollOffsets);
});
