// script.js
const projects = [
    {
      name: "Portfolio Website",
      url: "https://github.com/yourusername/portfolio"
    },
    {
      name: "AI Chatbot",
      url: "https://github.com/yourusername/ai-chatbot"
    },
    {
      name: "Weather App",
      url: "https://github.com/yourusername/weather-app"
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
  