// EXPERIENCE DATA
const experiences = [
  {
    company: "Civica Ltd.",
    position: "SOFTWARE & PRODUCT INTERN",
    date: "Jul - Aug 2025",
    location: "UK",
    expRole: "SOFTWARE & PRODUCT INTERN",
    expCo: "Civica Ltd.",
    expDate: "Jul - Aug 2025 · UK",
    description: [
      "Supported $6bn govt contract pitch for an overseas client — account plans & roadmaps",
      "Resolved 313 support tickets; authored 8 KBAs for OPAC library system",
      "Ran 3 discovery sessions with councils & consortia; fed into sprint planning",
      "Coordinated OPAC feature dev, attended sprints, trained in UI styling",
    ],
  },
  {
    company: "Coventry University",
    position: "Student Ambassador",
    date: "Nov 2025 - Present",
    location: "Coventry, UK",
    description: [
      "First point of contact for 90+ prospective students; campus tours & enrolment support",
      "Trained in safeguarding, tours and social media assistance"
    ],
  },
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
    date: "Sept 2024 - Present",
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
    date: "Jan 2023 - Aug 2024",
    location: "Reading, UK",
    description: [
      "Created mock 11+ papers and answer sheets.",
      "Strengthened time management and attention to detail.",
    ],
  },
  {
    company: "XL Education",
    position: "Tutor",
    date: "Dec 2019 - Oct 2021 & May 2024 - Jul 2024",
    location: "Reading, UK",
    description: [
      "Tutored students in English, Maths, VR, NVR, and Creative Writing.",
      "Supported 11+ exam prep with detailed feedback and mentorship.",
      "Taught Scratch and Python to students in underprivileged areas.",
      "Helped set up a computer lab in an Orissa-based orphanage.",
    ],
  },
];

// CATEGORIZED EXPERIENCE
function renderExperiences() {
  const experienceContainer = document.getElementById("experience-list");

  experienceContainer.innerHTML = '';

  const industryList = document.createElement("div");
  const volunteerList = document.createElement("div");

  const industryHeading = document.createElement("h3");
  industryHeading.textContent = "Professional & Industry Experience";
  industryList.appendChild(industryHeading);

  const volunteerHeading = document.createElement("h3");
  volunteerHeading.textContent = "Volunteering & Leadership";
  volunteerList.appendChild(volunteerHeading);

  // helper to detect volunteer roles
  const isVolunteerPosition = (pos) => {
    return ["Volunteer", "Executive Officer", "Tutor", "Exam Paper Creator", "Student Ambassador"]
      .some(role => pos.includes(role));
  };

  const makeCard = (exp) => {
    const card = document.createElement("div");
    card.className = "experience-card";

    if (exp.expRole || exp.expCo || exp.expDate) {
      card.innerHTML = `
        <div class="exp-role">${exp.expRole || exp.position}</div>
        <div class="exp-co">${exp.expCo || exp.company}</div>
        <div class="exp-date">${exp.expDate || `${exp.date} · ${exp.location}`}</div>
        <ul>
          ${exp.description.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    } else {
      card.innerHTML = `
        <h4>${exp.position} @ ${exp.company}</h4>
        <p class="meta">${exp.date} | ${exp.location}</p>
        <ul>
          ${exp.description.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    }

    return card;
  };

  const industryExps = experiences.filter(exp => !isVolunteerPosition(exp.position));
  const volunteerExps = experiences.filter(exp => isVolunteerPosition(exp.position));

  industryExps.forEach(exp => industryList.appendChild(makeCard(exp)));
  volunteerExps.forEach(exp => volunteerList.appendChild(makeCard(exp)));
  experienceContainer.appendChild(industryList);
  experienceContainer.appendChild(volunteerList);
}

// PROJECTS DATA
const projects = [
  {
    name: "Portfolio Website source code",
    url: "https://github.com/xynox19/xynox19.github.io",
    desc: "A modern static portfolio site showcasing my skills, experience, and projects, built with HTML, CSS, and JavaScript."
  },
  {
    name: "KomodoHub Animal Conservation (WIP)",
    url: "https://github.coventry.ac.uk/douses/KomodoHub",
    desc: "A work-in-progress conservation platform built for collaborative university development and wildlife impact tracking."
  },
  {
    name: "AI-powered Chatbot",
    url: "https://github.com/xynox19/chatbot-ai-info",
    desc: "A Python Streamlit chatbot with a custom Q&A knowledge base and optional GPT fallback for unknown AI questions."
  },
  {
    name: "Smart Home IoT simulation (using MQTT)",
    url: "https://github.coventry.ac.uk/4005CMD2324JANMAY/HRCTSS-HomeSystem",
    desc: "A simulated smart home system demonstrating MQTT communication between sensors, controllers, and devices."
  },
  {
    name: "Multilayer Perceptron Simulation",
    url: "https://github.com/xynox19/multilayer-perceptron-simulation",
    desc: "A Python-based MLP simulation that models training, forward/backward propagation, and weight updates from scratch."
  },
  {
    name: "TCP Client/Server Model",
    url: "https://github.com/xynox19/multithreading-server",
    desc: "A multithreaded TCP server and client implementation in Python and C++ for concurrent socket communication."
  },
  {
    name: "Pandas/Dask Large Dataset Analysis",
    url: "https://github.coventry.ac.uk/sethis8/data-science-cw",
    desc: "A data science analysis project using Pandas and Dask to process and visualize large datasets."
  },
  {
    name: "GCSE NEA - Zork-styled text adventure game",
    url: "https://github.com/xynox19/aperture-text-game/tree/main",
    desc: "A GCSE text-adventure game inspired by Zork, written in Python with interactive rooms and puzzles."
  },
  {
    name: "GCSE NEA - Membership system",
    url: "https://github.com/xynox19/membership-system-NEA",
    desc: "A Python-based membership system built for GCSE coursework, with data entry, validation, and basic record management."
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

// THEME TOGGLE
function initThemeToggle() {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || htmlElement.getAttribute('data-theme') || 'dark';
  htmlElement.setAttribute('data-theme', initialTheme);
  updateThemeToggleIcon(initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme);
  });
}

function updateThemeToggleIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'dark' ? '☽' : '☀';
}

// INIT
initThemeToggle();
renderExperiences();
renderProjects();
