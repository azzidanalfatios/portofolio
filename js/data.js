/* ALL CONTENT LIVES HERE. Edit this file only. Items marked TODO are placeholders. */
const PORTFOLIO = {
  profile: {
    name: "Azzidan Al'fatio Syachputra",
    role: "Informatics Engineering Student",
    aspiration: "Aspiring Software Engineer",
    school: "STT Terpadu Nurul Fikri",
    photo: "assets/photo.jpg",
    bio: [
      "I'm an Informatics Engineering student at STT Terpadu Nurul Fikri who wants to become a software engineer.",
      "I build for the web and mobile, and I care about security from the first line of code." // TODO: personalise
    ],
    interests: ["Web Development", "Software Engineering", "Mobile Application Development", "DevSecOps", "Cybersecurity"],
    goal: "Become a software engineer who ships secure, well-built products." // TODO: personalise
  },
  social: [
    { name: "GitHub", handle: "azzidanalfatios", url: "https://github.com/azzidanalfatios", mark: "GH" },
    { name: "LinkedIn", handle: "Azzidan Al'fatio Syachputra", url: "https://www.linkedin.com/in/azzidan-alfatio-syachputra-326b20371", mark: "in" },
    { name: "Instagram", handle: "zidantiooo", url: "https://www.instagram.com/zidantiooo?cplk=MW5ta2VhenFqb3dvYg==", mark: "IG" },   // TODO: real URL
    { name: "Email", handle: "azzidan.alfatios@gmail.com", url: "mailto:azzidan.alfatios@gmail.com", mark: "@" }       // TODO: real email
  ],
  projects: [
    { title: "JANLUP", type: "Mobile app", desc: "A task reminder app built with Flutter.", stack: ["Flutter"], features: ["Task reminders"], github: "https://github.com/azzidanalfatios", demo: null },
    { title: "NovaTech", type: "Website", desc: "A smartphone store website.", stack: ["HTML", "CSS", "JavaScript"], features: ["Product showcase"], github: "https://github.com/azzidanalfatios", demo: null },
    { title: "Resep Hemat Anak Kos", type: "Website", desc: "A budget recipe website for students, built with Django.", stack: ["Python", "Django"], features: ["Budget recipes"], github: "https://github.com/azzidanalfatios", demo: null },
    { title: "TaskTrack", type: "Python app", desc: "A Python application that applies DevSecOps practices.", stack: ["Python", "Git", "Docker"], features: ["DevSecOps workflow"], github: "https://github.com/azzidanalfatios", demo: null }
    // TODO: fix repo links, stacks, features, add demo URLs
  ],
  skills: [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
    { group: "Backend", items: ["Python", "PHP", "Django"] },
    { group: "Database", items: ["MySQL"] },
    { group: "Mobile", items: ["Flutter"] },
    { group: "Tools", items: ["Git", "Docker", "PowerShell"] }
  ],
  timeline: [
  {
    period: "Present",
    title: "Informatics Engineering",
    place: "STT Terpadu Nurul Fikri",
    note: "Currently pursuing a degree in Informatics Engineering."
  },
  {
    period: "2022 – 2025",
    title: "Senior High School",
    place: "MA AL-ITTIHAD",
    note: "Graduated in 2025."
  },
  {
    period: "Achievement",
    title: "Qur'an Memorization",
    place: "5 Juz Memorization Certificate",
    note: "Recognized achievement in Qur'an memorization."
  }
],
  cards: [
    { key: "about", n: "01", title: "About me", href: "about.html" },
    { key: "projects", n: "02", title: "Projects", href: "projects.html" },
    { key: "social", n: "03", title: "Social media", href: "social.html" },
    { key: "skills", n: "04", title: "Skills", href: "skills.html" },
    { key: "experience", n: "05", title: "Experience", href: "experience.html" }
  ]
};
