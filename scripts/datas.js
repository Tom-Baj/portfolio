export const navLinks = [
  { name: "Home", path: "#main" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projets", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export const skillsList = [
  {
    name: "HTML",
    icon: "html5",
    pourcentage: "90%",
    progression: 0.9,
  },
  {
    name: "CSS",
    icon: "css3",
    pourcentage: "80%",
    progression: 0.8,
  },
  {
    name: "Javascript",
    icon: "javascript",
    pourcentage: "70%",
    progression: 0.7,
  },
  {
    name: "Sass",
    icon: "sass",
    pourcentage: "80%",
    progression: 0.8,
  },
  {
    name: "React",
    icon: "react",
    pourcentage: "70%",
    progression: 0.7,
  },
  {
    name: "NodeJs",
    icon: "nodejs",
    pourcentage: "60%",
    progression: 0.6,
  },
  {
    name: "Express",
    icon: "express",
    pourcentage: "60%",
    progression: 0.6,
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    pourcentage: "60%",
    progression: 0.6,
  },
];

export const osList = [
  {
    name: "MacOS",
    icon: "apple",
  },
  {
    name: "Windows",
    icon: "windows-11",
  },
  {
    name: "Linux",
    icon: "linux",
  },
];

export const softwareList = [
  {
    name: "VSCode",
    icon: "vscode",
  },
  {
    name: "Figma",
    icon: "figma",
  },
  {
    name: "Photoshop",
    icon: "photoshop",
  },
];

export const utilsList = [
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "Npm",
    icon: "npm",
  },
  {
    name: "Terminal",
    icon: "terminal",
  },
  {
    name: "Postman",
    icon: "postman",
  },
];

export const projectsList = [
  {
    id: "kasa",
    title: "Kasa Location Immobilière",
    description: "Application de location immobilière",
    role: "Développement du FrontEnd de l'application Kasa Location Immobilière en utilisant React",
    defis: `Le défi était de créer une en utilisant React. J'ai dû apprendre à utiliser React et react-router pour créer des composants dynamiques et à les afficher sur le site. `,
    image: "../assets/images/projets/kasa.webp",
    size: "--large",
    link: "https://kasa-location-immobiliere-alpha.vercel.app/",
    code: "https://github.com/Tom-Baj/kasa-location-immobiliere.git",
  },
  {
    id: "grimoire",
    title: "Mon Vieux Grimoire",
    description: "Site de notation de livres",
    role: "Développement du Backend du site Mon Vieux Grimoire un site de notation de livres",
    defis: `Mes premiers pas dans le Back-end ont nécessité une adaptation rapide. J'ai dû apprendre et assimiler rapidement une nouvelle approche pour interpréter le code.`,
    image: "../assets/images/projets/grimoire.webp",
    size: "--big",
    link: "",
    code: "https://github.com/Tom-Baj/grimoire-frontend.git",
  },
  {
    id: "rating",
    title: "Rating Card",
    description: "Interactive rating component avec CSS et Javascript",
    role: "Développement d'un composant de notation interactif en utilisant CSS et Javascript",
    image: "../assets/images/projets/rating.webp",
    size: "--small",
    link: "https://tom-baj.github.io/interactive-rating-component/",
    code: "https://github.com/Tom-Baj/interactive-rating-component.git",
  },
  {
    id: "nina",
    title: "Photographe, Nina Carducci",
    description: "Debug et optimisation du site de Nina Carducci",
    role: "Debug et optimisation SEO du site de Nina Carducci en utilisant les outils de développement",
    defis: `Le défi était de comprendre le code existant et de le déboguer pour optimiser le site. J'ai dû apprendre à utiliser les outils de développement pour identifier les problèmes et les corriger dans un code qui n'étais pas écrit par moi-même.`,
    image: "../assets/images/projets/nina.webp",
    size: "--large",
    link: "https://tom-baj.github.io/photographe-nina-optimise/",
    code: "https://github.com/Tom-Baj/photographe-nina-optimise.git",
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    description: "Jeu du morpion",
    role: "Développement du jeu du morpion en utilisant HTML, CSS et Javascript",
    image: "../assets/images/projets/tictactoe.webp",
    size: "--small",
    link: "https://tom-baj.github.io/tic-tac-toe/",
    code: "https://github.com/Tom-Baj/tic-tac-toe",
  },
  {
    id: "architecte",
    title: "Portfolio Architecte d'intérieur",
    description: "Portfolio d'une architecte d'intérieur",
    role: "Mise en place dynamique du FrontEnd en incorporant une sesson administrateur pour la gestion des projets via l'API",
    defis: `Implémentation d'une session administrateur pour la gestion des projets. J'ai dû apprendre à utiliser une API pour la gestion des projets et à les afficher dynamiquement sur le site.`,
    image: "../assets/images/projets/sophie.webp",
    size: "--high",
    link: "",
    code: "https://github.com/Tom-Baj/portfolio-architecte.git",
  },
  {
    id: "password",
    title: "Générateur de mot de passe",
    description: "Générateur de mot de passe en ligne",
    role: "Développement d'un générateur de mot de passe en utilisant HTML, CSS et Javascript",
    image: "../assets/images/projets/password.webp",
    size: "--medium",
    link: "https://tom-baj.github.io/password-generator/",
    code: "https://github.com/Tom-Baj/password-generator.git",
  },
  {
    id: "faq",
    title: "FAQ Card",
    description: "FAQ Accordion Card avec CSS et Javascript",
    role: "Développement d'une carte FAQ avec un accordéon en utilisant CSS et Javascript",
    defis:
      "Le premier projet que j'ai commencé à créer j'ai du apprendre d'une manière général le code à ce moment là.",
    image: "../assets/images/projets/faq.webp",
    size: "--small",
    link: "https://faq-accordion-pied.vercel.app/",
    code: "https://github.com/Tom-Baj/FAQ-accordion.git",
  },
  {
    id: "booki",
    title: "Agence de voyage, Booki",
    description: "Site de location de vacances",
    role: "Développement du FrontEnd de l'application Booki en utilisant HTML et CSS",
    image: "../assets/images/projets/booki.webp",
    size: "--large",
    link: "https://tom-baj.github.io/agence-de-voyage/",
    code: "https://github.com/Tom-Baj/agence-de-voyage.git",
  },
  {
    id: "calculatrice",
    title: "Calculatrice",
    description: "Calculatrice en ligne",
    role: "Développement d'une calculatrice en utilisant HTML, CSS et Javascript",
    image: "../assets/images/projets/calculatrice.webp",
    size: "--medium",
    link: "https://tom-baj.github.io/calculatrice/",
    code: "https://github.com/Tom-Baj/calculatrice",
  },
];

export const socialLinks = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tom-baj",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Tom-Baj",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/BajouxTom",
  },
];
