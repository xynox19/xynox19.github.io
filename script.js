// EXPERIENCE DATA
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

// CATEGORIZED EXPERIENCE
function renderExperiences() {
  const experienceContainer = document.getElementById("experience-list");

  const industryList = document.createElement("div");
  const volunteerList = document.createElement("div");

  const industryHeading = document.createElement("h3");
  industryHeading.textContent = "Professional & Industry Experience";
  industryList.appendChild(industryHeading);

  const volunteerHeading = document.createElement("h3");
  volunteerHeading.textContent = "Volunteering & Leadership";
  volunteerList.appendChild(volunteerHeading);

  experiences.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "experience-card";
    card.innerHTML = `
      <h4>${exp.position} @ ${exp.company}</h4>
      <p class="meta">${exp.date} | ${exp.location}</p>
      <ul>
        ${exp.description.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;

    const isVolunteer = [
      "Volunteer",
      "Executive Officer",
      "Tutor",
      "Exam Paper Creator"
    ].some(role => exp.position.includes(role));

    if (isVolunteer) {
      volunteerList.appendChild(card);
    } else {
      industryList.appendChild(card);
    }
  });

  experienceContainer.appendChild(industryList);
  experienceContainer.appendChild(volunteerList);
}

// PROJECTS DATA
const projects = [
  {
    name: "Portfolio Website source code",
    url: "https://github.com/xynox19/xynox19.github.io",
    desc: "A clean, responsive static site showcasing personal projects, experience, and contact info with dynamic UI behaviors."
  },
  {
    name: "KomodoHub Animal Conservation (WIP)",
    url: "https://github.coventry.ac.uk/douses/KomodoHub",
    desc: "A work-in-progress platform focused on wildlife conservation, built for collaborative university development."
  },
  {
    name: "AI-powered Chatbot",
    url: "https://github.com/xynox19/chatbot-ai-info",
    desc: "A Python-based neural network chatbot using NLP and an MLP model to classify and respond to user queries."
  },
  {
    name: "Smart Home IoT simulation (using MQTT)",
    url: "https://github.coventry.ac.uk/4005CMD2324JANMAY/HRCTSS-HomeSystem",
    desc: "Simulates IoT device communication using MQTT protocol for smart home environments, including sensors and controllers."
  },
  {
    name: "Multilayer Perceptron Simulation",
    url: "https://github.com/xynox19/multilayer-perceptron-simulation",
    desc: "A from-scratch MLP neural network simulation showing forward/backward propagation and training process visualization."
  },
  {
    name: "TCP Client/Server Model",
    url: "https://github.com/xynox19/multithreading-server",
    desc: "A multithreaded TCP server capable of handling multiple client connections concurrently with custom logic."
  },
  {
    name: "Pandas/Dask Large Dataset Analysis",
    url: "https://github.coventry.ac.uk/sethis8/data-science-cw",
    desc: "Processes and analyzes large datasets using Pandas and Dask, including visualization and statistical summaries."
  },
  {
    name: "GCSE NEA - Zork-styled text adventure game",
    url: "https://github.com/xynox19/aperture-text-game/tree/main",
    desc: "A retro text-based adventure game with room navigation, items, and puzzles, inspired by classic Zork-style games."
  },
  {
    name: "GCSE NEA - Membership system",
    url: "https://github.com/xynox19/membership-system-NEA",
    desc: "A membership management system featuring data entry, editing, deletion, and simple validation, built for NEA."
  }
];

// RENDERING LOGIC
function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const link = document.createElement("a");
    link.href = project.url;
    link.textContent = project.name;
    link.target = "_blank";

    const description = document.createElement("p");
    description.textContent = project.desc || "No description provided.";

    card.appendChild(link);
    card.appendChild(description);
    projectList.appendChild(card);
  });
}

// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
});

// Optional: persist theme (optional for GitHub Pages)
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    toggle.textContent = saved === "dark" ? "🌙" : "☀️";
  }
});

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggle.textContent = next === "dark" ? "🌙" : "☀️";
});

// INIT
renderExperiences();
renderProjects();
