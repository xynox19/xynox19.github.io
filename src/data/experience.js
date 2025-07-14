// data/experience.js
export const experiences = [
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
    date: "Dec 2019 - Oct 2021 & May 2024 - Jul 2024",
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