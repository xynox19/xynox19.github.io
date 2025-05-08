const experiences = [
  {
    company: "Three UK",
    position: "Technology Work Experience",
    date: "June 2024",
    location: "Reading, UK",
    description: [
      "Exposed to mobile testing, solution architecture, and business analysis.",
      "Explored the Mobile Core Network and learned about basic call and billing systems.",
    ],
  },
  {
    company: "CyberWomen Coventry",
    position: "Executive Officer",
    date: "Sept 2024 – Present",
    location: "Coventry, UK",
    description: [
      "Engaged in STEM outreach and technical leadership.",
      "Promoted diversity in tech and supported peer development.",
    ],
  },
  {
    company: "Airbus",
    position: "Summer Intern",
    date: "Summer 2022",
    location: "UK",
    description: [
      "Completed multi-disciplinary case studies in Aerospace Engineering, ATC, and Computing.",
      "Gained hands-on exposure to workplace collaboration and project design.",
    ],
  },
  {
    company: "Wood PLC.",
    position: "Spring Intern",
    date: "Spring 2022",
    location: "UK",
    description: [
      "Researched sustainable engineering solutions and summarised CAPEX implications.",
      "Collaborated on real-world fuel alternatives case study.",
    ],
  },
  {
    company: "College of VCP",
    position: "Exam Paper Creator (Commission-Based)",
    date: "Jan 2023 – Aug 2024",
    location: "Reading, UK",
    description: [
      "Created mock 11+ papers and answer sheets.",
      "Strengthened time management and attention to detail.",
    ],
  },
  {
    company: "XL Education",
    position: "Tutor",
    date: "Dec 2019 – Oct 2021 & May 2024 – Jul 2024",
    location: "Reading, UK",
    description: [
      "Tutored students in English, Maths, VR, NVR, and Creative Writing.",
      "Supported 11+ exam prep with detailed feedback and mentorship.",
    ],
  },
  {
    company: "Ek-Asha Charity",
    position: "Volunteer",
    date: "Summer 2020 & 2021",
    location: "UK & India",
    description: [
      "Taught Scratch and Python to students in underprivileged areas.",
      "Helped set up a computer lab in an Orissa-based orphanage.",
    ],
  },
];

function renderExperiences() {
  const container = document.getElementById("experience-list");
  experiences.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "experience-card";

    card.innerHTML = `
      <h3>${exp.position} @ ${exp.company}</h3>
      <p class="meta">${exp.date} | ${exp.location}</p>
      <ul>
        ${exp.description.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
    container.appendChild(card);
  });
}

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
    url: "https://github.com/xynox19/aperture-text-game/tree/main"
  },
  {
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
  renderExperiences();
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
