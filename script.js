const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const yearSpan = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  body.classList.remove("theme-light");
  body.classList.add("theme-dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("theme-dark");
    if (!isDark) {
      body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("theme-light");
      localStorage.setItem("theme", "dark");
    }
  });
}

const flag = document.getElementById('flag');

flag.addEventListener('click', () => {
  if (flag.src.includes('Flag_of_the_Netherlands')) {
    flag.src = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
  } else {
    flag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1920px-Flag_of_the_Netherlands.svg.png';
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    const successMessage = document.getElementById("formSuccess");

    if (isValid) {
      if (successMessage) {
        successMessage.hidden = false;
      }
      contactForm.reset();
    } else if (successMessage) {
      successMessage.hidden = true;
    }
  });
}

/* Language Switcher */
let isEnglish = true;

function switchLanguage() {
  isEnglish = !isEnglish;

  document.querySelector('.logo-subtitle').textContent = isEnglish 
    ? "Future Software Developer" 
    : "Toekomstige Softwareontwikkelaar";

  document.querySelector('.hero-kicker').textContent = isEnglish 
    ? "Open for internships" 
    : "Beschikbaar voor stages";

  document.querySelector('.hero h1').innerHTML = isEnglish 
    ? "Hi, I’m <span class='hero-highlight'>Rens v/d Rijt</span>." 
    : "Hoi, ik ben <span class='hero-highlight'>Rens v/d Rijt</span>.";

  document.querySelector('.hero-subtitle').textContent = isEnglish 
    ? "I’m a student and future software developer who loves building clean, responsive web interfaces and learning how real teams ship software." 
    : "Ik ben een student en toekomstige softwareontwikkelaar die graag schone, responsieve webinterfaces bouwt en leert hoe echte teams software afleveren.";

  document.querySelector('.btn-primary').textContent = isEnglish 
    ? "View my projects" 
    : "Bekijk mijn projecten";

  document.querySelector('.btn-ghost').textContent = isEnglish 
    ? "Contact me" 
    : "Neem contact op";

  const stats = [
    { en: "Front-end foundations", nl: "Front-end basis" },
    { en: "Curious & hands-on", nl: "Nieuwsgierig & praktisch" },
    { en: "Grow as an intern developer", nl: "Groeien als stagiair-ontwikkelaar" }
  ];

  document.querySelectorAll('.hero-stat dd').forEach((el, i) => {
    el.textContent = isEnglish ? stats[i].en : stats[i].nl;
  });

  document.querySelector('.profile-role').textContent = isEnglish 
    ? "Junior Web Developer" 
    : "Junior Webontwikkelaar";

  document.querySelector('.profile-bio').textContent = isEnglish 
    ? "I enjoy turning ideas into working, accessible websites with a focus on structure, usability and clean code." 
    : "Ik vind het leuk om ideeën om te zetten in werkende, toegankelijke websites met focus op structuur, bruikbaarheid en nette code.";

  document.querySelector('.profile-status-text').textContent = isEnglish 
    ? "Actively looking for an internship" 
    : "Actief op zoek naar een stage";

  document.querySelector('.section-header h2').textContent = isEnglish 
    ? "Why work with me?" 
    : "Waarom met mij werken?";

  document.querySelector('.section-header p').textContent = isEnglish 
    ? "I bring a strong learning attitude, respect for best practices, and a calm, structured way of working." 
    : "Ik breng een sterke leerhouding, respect voor best practices en een rustige, gestructureerde manier van werken.";

  const cards = [
    {
      en: ["Solid foundations", "I focus on getting the basics right first: semantic HTML, modern CSS (Flexbox & Grid), and clear, readable JavaScript."],
      nl: ["Sterke basis", "Ik richt me eerst op de basis: semantische HTML, moderne CSS (Flexbox & Grid), en duidelijke, leesbare JavaScript."]
    },
    {
      en: ["Professional attitude", "I take feedback seriously, communicate clearly, and enjoy working in a team where we help each other grow."],
      nl: ["Professionele houding", "Ik neem feedback serieus, communiceer duidelijk, en werk graag in een team waar we elkaar laten groeien."]
    },
    {
      en: ["Growth mindset", "I’m motivated by learning new technologies, improving my work step by step, and understanding how real-world projects are built."],
      nl: ["Groeimindset", "Ik word gemotiveerd door nieuwe technologieën te leren, mijn werk stap voor stap te verbeteren en te begrijpen hoe echte projecten worden gebouwd."]
    }
  ];

  document.querySelectorAll('.card').forEach((card, i) => {
    card.querySelector('h3').textContent = isEnglish ? cards[i].en[0] : cards[i].nl[0];
    card.querySelector('p').textContent = isEnglish ? cards[i].en[1] : cards[i].nl[1];
  });

  document.querySelector('.cta-text h2').textContent = isEnglish 
    ? "Ready to meet a motivated intern?" 
    : "Klaar om een gemotiveerde stagiair te ontmoeten?";

  document.querySelector('.cta-text p').textContent = isEnglish 
    ? "I’d love to hear more about your company, team, and projects, and see how I can contribute while I’m learning." 
    : "Ik hoor graag meer over uw bedrijf, team en projecten, en hoe ik kan bijdragen terwijl ik leer.";

  document.querySelector('.btn-light').textContent = isEnglish 
    ? "Get in touch" 
    : "Neem contact op";

  document.querySelector('.btn-outline').textContent = isEnglish 
    ? "See my projects" 
    : "Bekijk mijn projecten";
}

let isEnglishSkills = true;

function switchLanguageSkills() {
  isEnglishSkills = !isEnglishSkills;

  const logoSubtitle = document.querySelector(".logo-subtitle");
  if (logoSubtitle) {
    logoSubtitle.textContent = isEnglishSkills 
      ? "Future Software Developer" 
      : "Toekomstige Softwareontwikkelaar";
  }

  const heroH1 = document.querySelector(".page-hero h1");
  const heroP = document.querySelector(".page-hero p");
  if (heroH1 && heroP) {
    heroH1.textContent = isEnglishSkills ? "Skills" : "Vaardigheden";
    heroP.textContent = isEnglishSkills 
      ? "A clear overview of my current technical skills, soft skills, and what I’m actively learning." 
      : "Een duidelijk overzicht van mijn huidige technische vaardigheden, soft skills en wat ik actief aan het leren ben.";
  }

  const techHeaderH2 = document.querySelector(".section-header h2");
  const techHeaderP = document.querySelector(".section-header p");
  if (techHeaderH2 && techHeaderP) {
    techHeaderH2.textContent = isEnglishSkills ? "Technical skills" : "Technische vaardigheden";
    techHeaderP.textContent = isEnglishSkills 
      ? "Focused on front-end foundations and writing clean, maintainable code." 
      : "Gecentreerd op front-end basisprincipes en het schrijven van schone, onderhoudbare code.";
  }

  const skillLabels = document.querySelectorAll(".skill-label span:first-child");
  const skillLevels = document.querySelectorAll(".skill-level");

  if (skillLabels.length && skillLevels.length) {
    const labelsEn = ["HTML5", "CSS3 (Flexbox & Grid)", "JavaScript (ES6 basics)", "Responsive design", "Git & version control"];
    const labelsNl = ["HTML5", "CSS3 (Flexbox & Grid)", "JavaScript (ES6 basis)", "Responsief design", "Git & versiebeheer"];

    const levelsEn = ["Good basics", "Growing", "Learning", "Growing", "Basic usage"];
    const levelsNl = ["Goede basis", "Groeien", "Leren", "Groeien", "Basiskennis"];

    skillLabels.forEach((el, i) => el.textContent = isEnglishSkills ? labelsEn[i] : labelsNl[i]);
    skillLevels.forEach((el, i) => el.textContent = isEnglishSkills ? levelsEn[i] : levelsNl[i]);
  }

  const softSkillsHeader = document.querySelector("aside .section-header h2");
  const softSkillsP = document.querySelector("aside .section-header p");
  const softSkillsList = document.querySelectorAll("aside .list-pills li");

  if (softSkillsHeader && softSkillsP && softSkillsList.length) {
    softSkillsHeader.textContent = isEnglishSkills ? "Soft skills" : "Soft skills";
    softSkillsP.textContent = isEnglishSkills 
      ? "Skills that help me work well with others and learn quickly." 
      : "Vaardigheden die mij helpen goed samen te werken en snel te leren.";

    const softSkillsEn = ["Communication", "Teamwork", "Problem-solving", "Curiosity", "Attention to detail", "Time management"];
    const softSkillsNl = ["Communicatie", "Teamwork", "Probleemoplossing", "Nieuwsgierigheid", "Oog voor detail", "Tijdmanagement"];

    softSkillsList.forEach((el, i) => el.textContent = isEnglishSkills ? softSkillsEn[i] : softSkillsNl[i]);
  }

  const learningHeader = document.querySelector("aside h3");
  const learningItems = document.querySelectorAll("aside .list-check li");

  if (learningHeader && learningItems.length) {
    learningHeader.textContent = isEnglishSkills ? "Currently learning" : "Momenteel aan het leren";

    const learningEn = [
      "Writing more structured JavaScript",
      "Improving accessibility in my projects",
      "Using design tools to translate layouts into code"
    ];

    const learningNl = [
      "Meer gestructureerde JavaScript schrijven",
      "Toegankelijkheid in mijn projecten verbeteren",
      "Design tools gebruiken om layouts naar code te vertalen"
    ];

    learningItems.forEach((el, i) => el.textContent = isEnglishSkills ? learningEn[i] : learningNl[i]);
  }

  const footerYear = document.getElementById("year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

let isEnglishAbout = true;

function switchLanguageAbout() {
  isEnglishAbout = !isEnglishAbout;

  const logoSubtitle = document.querySelector(".logo-subtitle");
  if (logoSubtitle) {
    logoSubtitle.textContent = isEnglishAbout
      ? "Future Software Developer"
      : "Toekomstige Softwareontwikkelaar";
  }

  const heroH1 = document.querySelector(".page-hero h1");
  const heroP = document.querySelector(".page-hero p");
  if (heroH1 && heroP) {
    heroH1.textContent = isEnglishAbout ? "About me" : "Over mij";
    heroP.textContent = isEnglishAbout
      ? "A short introduction to who I am, how I work, and what I’m looking for in an internship."
      : "Een korte introductie wie ik ben, hoe ik werk en wat ik zoek in een stage.";
  }

  const aboutH2 = document.querySelector(".about-body h2");
  const aboutP = document.querySelectorAll(".about-body p");
  const howWorkH3 = document.querySelector(".about-body h3:first-of-type");
  const howWorkList = document.querySelectorAll(".about-body .list-check li");
  const valuesH3 = document.querySelector(".about-body h3:nth-of-type(2)");
  const valuesList = document.querySelectorAll(".about-body .list-inline li");

  if (aboutH2) aboutH2.textContent = isEnglishAbout ? "Hello, I’m Rens" : "Hallo, ik ben Rens";

  if (aboutP.length) {
    aboutP[0].textContent = isEnglishAbout
      ? "I am a student and future software developer with a strong interest in web development. I enjoy taking ideas and turning them into something people can actually see and use in the browser."
      : "Ik ben student en toekomstig softwareontwikkelaar met een sterke interesse in webontwikkeling. Ik vind het leuk om ideeën om te zetten in iets wat mensen daadwerkelijk kunnen zien en gebruiken in de browser.";
    aboutP[1].textContent = isEnglishAbout
      ? "What motivates me is learning how software is built in the real world: how teams collaborate, how code is reviewed, and how small details in design and usability can make a huge difference for users."
      : "Wat mij motiveert is leren hoe software in de echte wereld wordt gebouwd: hoe teams samenwerken, hoe code wordt beoordeeld en hoe kleine details in ontwerp en bruikbaarheid een groot verschil kunnen maken voor gebruikers.";
  }

  if (howWorkH3) howWorkH3.textContent = isEnglishAbout ? "How I like to work" : "Hoe ik graag werk";
  if (howWorkList.length) {
    const howWorkEn = [
      "I start simple and improve my work step by step.",
      "I ask questions when needed instead of guessing.",
      "I keep my code readable and structured.",
      "I enjoy working in a team and sharing ideas."
    ];
    const howWorkNl = [
      "Ik begin simpel en verbeter mijn werk stap voor stap.",
      "Ik stel vragen wanneer nodig in plaats van te gokken.",
      "Ik houd mijn code leesbaar en gestructureerd.",
      "Ik werk graag in een team en deel ideeën."
    ];
    howWorkList.forEach((el, i) => el.textContent = isEnglishAbout ? howWorkEn[i] : howWorkNl[i]);
  }

  if (valuesH3) valuesH3.textContent = isEnglishAbout ? "What I value" : "Wat ik waardeer";
  if (valuesList.length) {
    const valuesEn = ["Clarity", "Respect", "Reliability", "Curiosity"];
    const valuesNl = ["Duidelijkheid", "Respect", "Betrouwbaarheid", "Nieuwsgierigheid"];
    valuesList.forEach((el, i) => el.textContent = isEnglishAbout ? valuesEn[i] : valuesNl[i]);
  }

  const timelineH2 = document.querySelector(".timeline .section-header h2");
  const timelineP = document.querySelector(".timeline .section-header p");
  const timelineItems = document.querySelectorAll(".timeline .timeline-item");

  if (timelineH2) timelineH2.textContent = isEnglishAbout ? "Timeline" : "Tijdlijn";
  if (timelineP) timelineP.textContent = isEnglishAbout
    ? "A quick overview of how I got into software development and where I want to go."
    : "Een kort overzicht van hoe ik in softwareontwikkeling terecht ben gekomen en waar ik naartoe wil.";

  if (timelineItems.length) {
    const timelineContent = [
      {
        en: {
          year: "2023 – now",
          title: "Software development studies",
          desc: "Building a strong foundation in programming, web technologies, and working in small projects with classmates."
        },
        nl: {
          year: "2023 – nu",
          title: "Softwareontwikkelingsstudies",
          desc: "Een sterke basis opbouwen in programmeren, webtechnologieën en werken in kleine projecten met medestudenten."
        }
      },
      {
        en: {
          year: "Before 2023",
          title: "First steps in tech",
          desc: "Exploring technology, websites and small coding challenges in my free time, and discovering that I enjoy solving problems with code."
        },
        nl: {
          year: "Voor 2023",
          title: "Eerste stappen in technologie",
          desc: "Technologie, websites en kleine codeeruitdagingen in mijn vrije tijd verkennen en ontdekken dat ik het leuk vind om problemen met code op te lossen."
        }
      },
      {
        en: {
          year: "Future",
          title: "Intern and junior developer",
          desc: "Growing from a trainee into a confident developer in a team that helps me learn and where I can contribute real value."
        },
        nl: {
          year: "Toekomst",
          title: "Stagiair en junior developer",
          desc: "Groeien van een stagiair naar een zelfverzekerde ontwikkelaar in een team dat me helpt leren en waar ik echte waarde kan toevoegen."
        }
      }
    ];

    timelineItems.forEach((item, i) => {
      const yearEl = item.querySelector(".timeline-year");
      const titleEl = item.querySelector(".timeline-content h3");
      const descEl = item.querySelector(".timeline-content p");

      if (yearEl) yearEl.textContent = isEnglishAbout ? timelineContent[i].en.year : timelineContent[i].nl.year;
      if (titleEl) titleEl.textContent = isEnglishAbout ? timelineContent[i].en.title : timelineContent[i].nl.title;
      if (descEl) descEl.textContent = isEnglishAbout ? timelineContent[i].en.desc : timelineContent[i].nl.desc;
    });
  }

  const footerYear = document.getElementById("year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}

let isEnglishContact = true;

function switchLanguageContact() {
  isEnglishContact = !isEnglishContact;

  const logoSubtitle = document.querySelector(".logo-subtitle");
  if (logoSubtitle) {
    logoSubtitle.textContent = isEnglishContact
      ? "Future Software Developer"
      : "Toekomstige Softwareontwikkelaar";
  }

  const heroH1 = document.querySelector(".page-hero h1");
  const heroP = document.querySelector(".page-hero p");
  if (heroH1 && heroP) {
    heroH1.textContent = isEnglishContact ? "Contact" : "Contact";
    heroP.textContent = isEnglishContact
      ? "Interested in working with me or offering an internship? Let’s get in touch."
      : "Geïnteresseerd om met mij te werken of een stage aan te bieden? Laten we contact opnemen.";
  }

  const sectionH2 = document.querySelector(".section-header h2");
  const sectionP = document.querySelector(".section-header p");
  if (sectionH2 && sectionP) {
    sectionH2.textContent = isEnglishContact ? "Let’s talk" : "Laten we praten";
    sectionP.textContent = isEnglishContact
      ? "I’m open to internship opportunities where I can learn from experienced developers and contribute to real projects."
      : "Ik sta open voor stageplaatsen waar ik kan leren van ervaren ontwikkelaars en kan bijdragen aan echte projecten.";
  }

  const contactList = document.querySelectorAll(".contact-list li span");
  if (contactList.length) {
    const labelsEn = ["Email", "GitHub", "LinkedIn"];
    const labelsNl = ["E-mail", "GitHub", "LinkedIn"];
    contactList.forEach((el, i) => el.textContent = isEnglishContact ? labelsEn[i] : labelsNl[i]);
  }

  const smallText = document.querySelector(".small-text");
  if (smallText) {
    smallText.textContent = isEnglishContact
      ? "You can also reach me using the contact form. In a real deployment, this form would send your message directly to my email."
      : "Je kunt me ook bereiken via het contactformulier. In een echte website zou dit formulier je bericht rechtstreeks naar mijn e-mail sturen.";
  }

  const nameLabel = document.querySelector('label[for="name"]');
  const nameInput = document.querySelector('#name');
  if (nameLabel) nameLabel.textContent = isEnglishContact ? "Name*" : "Naam*";
  if (nameInput) nameInput.placeholder = isEnglishContact ? "Your name" : "Je naam";

  const emailLabel = document.querySelector('label[for="email"]');
  const emailInput = document.querySelector('#email');
  if (emailLabel) emailLabel.textContent = isEnglishContact ? "Email*" : "E-mail*";
  if (emailInput) emailInput.placeholder = isEnglishContact ? "you@example.com" : "jij@voorbeeld.nl";

  const messageLabel = document.querySelector('label[for="message"]');
  const messageInput = document.querySelector('#message');
  if (messageLabel) messageLabel.textContent = isEnglishContact ? "Message*" : "Bericht*";
  if (messageInput) messageInput.placeholder = isEnglishContact
    ? "Tell me about your company or project"
    : "Vertel me over je bedrijf of project";

  const submitButton = document.querySelector('#contactForm button[type="submit"]');
  if (submitButton) submitButton.textContent = isEnglishContact ? "Send message" : "Verstuur bericht";

  const formSuccess = document.getElementById("formSuccess");
  if (formSuccess) formSuccess.textContent = isEnglishContact
    ? "Thank you! This message has been handled in the demo. In a real website, it would be sent to my email."
    : "Bedankt! Dit bericht is afgehandeld in de demo. Op een echte website zou het naar mijn e-mail worden gestuurd.";

  const footerYear = document.getElementById("year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}


let isEnglishProjects = true;

function switchLanguageProjects() {
  isEnglishProjects = !isEnglishProjects;

  const logoSubtitle = document.querySelector(".logo-subtitle");
  if (logoSubtitle) {
    logoSubtitle.textContent = isEnglishProjects
      ? "Future Software Developer"
      : "Toekomstige Softwareontwikkelaar";
  }

  const heroH1 = document.querySelector(".page-hero h1");
  const heroP = document.querySelector(".page-hero p");
  if (heroH1 && heroP) {
    heroH1.textContent = isEnglishProjects ? "Projects" : "Projecten";
    heroP.textContent = isEnglishProjects
      ? "A selection of school and personal projects that show how I think, learn and write code."
      : "Een selectie van school- en persoonlijke projecten die laten zien hoe ik denk, leer en codeer.";
  }

  const sectionHeaders = document.querySelectorAll(".section-header");
  if (sectionHeaders.length) {
    const headersEn = [
      "Highlighted work",
      "How I approach projects"
    ];
    const headersNl = [
      "Uitgelicht werk",
      "Hoe ik projecten aanpak"
    ];
    const paragraphsEn = [
      "Replace these placeholders with your own real projects, GitHub links and live demos.",
      "I try to keep a clear, repeatable way of working when I start something new."
    ];
    const paragraphsNl = [
      "Vervang deze voorbeelden door je eigen echte projecten, GitHub-links en live demo's.",
      "Ik probeer een duidelijke, herhaalbare manier van werken te volgen wanneer ik iets nieuws begin."
    ];

    sectionHeaders.forEach((header, i) => {
      const h2 = header.querySelector("h2");
      const p = header.querySelector("p");
      if (h2) h2.textContent = isEnglishProjects ? headersEn[i] : headersNl[i];
      if (p) p.textContent = isEnglishProjects ? paragraphsEn[i] : paragraphsNl[i];
    });
  }

  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length) {
    const projectData = [
      {
        type: ["School project", "Schoolproject"],
        title: ["Responsive Portfolio", "Responsieve Portfolio"],
        desc: [
          "A mobile-first portfolio website focused on clean layout, accessibility and a professional presentation for internship companies.",
          "Een mobile-first portfolio website met focus op een overzichtelijke lay-out, toegankelijkheid en een professionele presentatie voor stagebedrijven."
        ]
      },
      {
        type: ["Personal project", "Persoonlijk project"],
        title: ["Simple To-Do App", "Eenvoudige To-Do App"],
        desc: [
          "A JavaScript to-do list that lets users add, complete and remove tasks, built to practice DOM manipulation and basic state management.",
          "Een JavaScript to-do lijst waarmee gebruikers taken kunnen toevoegen, voltooien en verwijderen, gebouwd om DOM-manipulatie en basis state management te oefenen."
        ]
      },
      {
        type: ["Experiment", "Experiment"],
        title: ["CSS Layout Playground", "CSS Layout Playground"],
        desc: [
          "A page where I explored Flexbox and Grid layouts to understand how to build modern, responsive page sections and components.",
          "Een pagina waar ik Flexbox en Grid layouts onderzocht om te begrijpen hoe je moderne, responsieve pagina secties en componenten bouwt."
        ]
      }
    ];

    projectCards.forEach((card, i) => {
      const typeEl = card.querySelector(".project-type");
      const titleEl = card.querySelector("h3");
      const descEl = card.querySelector("p");
      if (typeEl) typeEl.textContent = isEnglishProjects ? projectData[i].type[0] : projectData[i].type[1];
      if (titleEl) titleEl.textContent = isEnglishProjects ? projectData[i].title[0] : projectData[i].title[1];
      if (descEl) descEl.textContent = isEnglishProjects ? projectData[i].desc[0] : projectData[i].desc[1];
    });
  }

  const stepTitles = [
    ["Understand the goal", "Begrijp het doel"],
    ["Plan the structure", "Plan de structuur"],
    ["Build in iterations", "Bouw in iteraties"],
    ["Test on devices", "Test op apparaten"],
    ["Reflect and improve", "Reflecteer en verbeter"]
  ];

  const stepDescriptions = [
    ["Clarify what we’re trying to build and who it’s for.", "Verduidelijk wat we proberen te bouwen en voor wie."],
    ["Sketch the layout, components and states before coding.", "Schets de lay-out, componenten en staten voordat je gaat coderen."],
    ["Start with basic features and refine them step by step.", "Begin met basisfuncties en verbeter deze stap voor stap."],
    ["Check mobile, tablet and desktop views and fix issues.", "Controleer mobiele, tablet- en desktopweergaven en los problemen op."],
    ["Review what went well and what to improve next time.", "Bekijk wat goed ging en wat de volgende keer verbeterd kan worden."]
  ];

  const steps = document.querySelectorAll(".list-steps li");
  steps.forEach((li, i) => {
    const h3 = li.querySelector("h3");
    const p = li.querySelector("p");
    if (h3) h3.textContent = isEnglishProjects ? stepTitles[i][0] : stepTitles[i][1];
    if (p) p.textContent = isEnglishProjects ? stepDescriptions[i][0] : stepDescriptions[i][1];
  });

  const footerYear = document.getElementById("year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}
