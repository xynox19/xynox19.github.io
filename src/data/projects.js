// data/projects.js
export const projects = [
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