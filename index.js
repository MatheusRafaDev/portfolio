// ===== DATE CALCULATIONS =====
const BIRTH_DATE = '2004-09-10'; // Formato YYYY-MM-DD (10/09/2004)
const WORK_START_DATE = '2022-10-01'; // Outubro 2022

function calculateAge() {
  const birthDate = new Date(BIRTH_DATE);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

function calculateWorkExperience() {
  const startDate = new Date(WORK_START_DATE);
  const today = new Date();
  
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months };
}

function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === 'present' ? new Date() : new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

function formatDateDuration(startDate, endDate, lang) {
  const { years, months } = calculateDuration(startDate, endDate);
  
  const monthNames = {
    pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  const startParts = startDate.split('-');
  const startMonth = monthNames[lang][parseInt(startParts[1]) - 1];
  const startYear = startParts[0];

  let endMonth, endYear;
  if (endDate === 'present') {
    endMonth = lang === 'pt' ? 'Presente' : 'Present';
    endYear = '';
  } else {
    const endParts = endDate.split('-');
    endMonth = monthNames[lang][parseInt(endParts[1]) - 1];
    endYear = endParts[0];
  }

  const durationText = lang === 'pt' 
    ? `${years} ano${years !== 1 ? 's' : ''} ${months > 0 ? `e ${months} mês${months !== 1 ? 'es' : ''}` : ''}`
    : `${years} year${years !== 1 ? 's' : ''}${months > 0 ? ` and ${months} month${months !== 1 ? 's' : ''}` : ''}`;

  const endDateDisplay = endDate === 'present' 
    ? (lang === 'pt' ? 'Presente' : 'Present')
    : `${endMonth} ${endYear}`;

  return `${startMonth} ${startYear} — ${endDateDisplay} · ${durationText}`;
}

function updateExperienceDates(lang) {
  document.querySelectorAll('.exp-item[data-date-start]').forEach(item => {
    const startDate = item.getAttribute('data-date-start');
    const endDate = item.getAttribute('data-date-end');
    const periodElement = item.querySelector('.exp-period');
    
    if (periodElement) {
      periodElement.textContent = formatDateDuration(startDate, endDate, lang);
    }
  });
}

function updateTotalExperience(lang) {
  const workExp = calculateWorkExperience();
  
  const experienceText = lang === 'pt'
    ? `${workExp.years} anos e ${workExp.months} meses`
    : `${workExp.years} years and ${workExp.months} months`;

  const age = calculateAge();

  // Update hero section by replacing placeholders in translation
  const heroSub = document.getElementById('hero-sub');
  if (heroSub) {
    let translation = translations[lang].hero_sub.replace('EXPERIENCE_PLACEHOLDER', experienceText);
    translation = translation.replace('AGE_PLACEHOLDER', age);
    heroSub.innerHTML = translation;
  }

  // Update hero role section
  const heroRole = document.getElementById('hero-role');
  if (heroRole) {
    const roleText = lang === 'pt'
      ? `Desenvolvedor Backend · ERP · APIs · Integrações`
      : `Backend Developer · ERP · APIs · Integrations`;
    heroRole.textContent = roleText;
  }

  // Update experience stat
  const statExp = document.getElementById('stat-exp');
  if (statExp) {
    const statText = lang === 'pt'
      ? `${workExp.years}<span style="font-size:1.1rem;">a</span> ${workExp.months}<span style="font-size:1.1rem;">m</span>`
      : `${workExp.years}<span style="font-size:1.1rem;">y</span> ${workExp.months}<span style="font-size:1.1rem;">m</span>`;
    statExp.innerHTML = statText;
  }
}

// ===== TRANSLATIONS =====
const translations = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_exp: "Experiência",
    nav_edu: "Formação",
    nav_skills: "Skills",
    nav_contact: "Contato",
    hero_title: "Matheus<br><span class='highlight'>Rafael</span>",
    hero_sub: "Desenvolvedor Backend com <strong>EXPERIENCE_PLACEHOLDER</strong> de experiência sólida em Node.js/TypeScript, C#/.NET e Java.<br>Especialista em sistemas ERP, APIs escaláveis e integrações inteligentes.",
    hero_resumes: "Download currículos:",
    hero_ver_projetos: "Ver Projetos",
    about_tag: "Quem sou",
    about_title: "Sobre mim",
    about_text_1: "Tenho AGE_PLACEHOLDER anos e sou desenvolvedor backend com <strong>EXPERIENCE_PLACEHOLDER</strong> de experiência. Atualmente trabalho na <strong>PWI Sistemas</strong>, onde desenvolvo e mantenho sistemas ERP corporativos com <strong>Node.js/TypeScript</strong> e SQL Server.",
    about_text_2: "Me mantenho sempre atualizado com as tendências do mercado e estou constantemente desenvolvendo novos projetos seja para aprender novas tecnologias, resolver problemas reais ou explorar integrações com <strong>inteligência artificial</strong>.",
    projects_tag: "O que construí",
    projects_title: "Projetos",
    projects_personal: "✦ Projeto Pessoal",
    projects_academic: "🎓 Projetos Acadêmicos",
    exp_tag: "Trajetória",
    exp_title: "Experiência",
    edu_tag: "Conhecimento",
    edu_title: "Formação",
    skills_tag: "Tecnologias",
    skills_title: "Habilidades",
    footer_text: "Feito por Matheus Rafael · São Paulo, SP · 2026",
    // Roles & Details
    role_backend: "Desenvolvedor Back-end",
    role_dev: "Desenvolvedor",
    role_intern: "Estagiário de TI",
    company_pwi: "PWI Sistemas · Tempo Integral · São Paulo (Híbrido)",
    company_pwi_intern: "PWI Sistemas · Estágio · São Paulo (Híbrido)",
    exp_backend_p1: "Atuação no desenvolvimento contínuo de sistemas ERP com foco em back-end utilizando <strong>Node.js e TypeScript</strong>.",
    exp_backend_b1: "Desenvolvimento de soluções nas áreas de pagamento, financeiro e contabilidade.",
    exp_backend_b2: "Análise e implementação de integrações completas com APIs de terceiros.",
    exp_backend_b3: "Automação de processos internos, eliminando tarefas manuais repetitivas.",
    exp_backend_b4: "Resolução de problemas críticos de integração e correção de bugs operacionais.",
    exp_backend_b5: "Modelagem e manutenção de bancos de dados SQL e documentação técnica detalhada.",
    exp_dev_p1: "Evolução e manutenção de APIs REST e sistemas legados.",
    exp_dev_b1: "Criação de novas funcionalidades e integrações com sistemas ERP em Node.js.",
    exp_dev_b2: "Desenvolvimento e manutenção de módulos ERP em FoxPro.",
    exp_dev_b3: "Manutenção de bancos de dados SQL e configuração de servidores.",
    exp_dev_b4: "Suporte técnico especializado e correção de bugs críticos.",
    exp_intern_p1: "Apoio no desenvolvimento e manutenção de sistemas corporativos.",
    exp_intern_b1: "Correção de bugs e melhorias evolutivas em sistemas ERP.",
    exp_intern_b2: "Desenvolvimento de novas funcionalidades utilizando FoxPro.",
    exp_intern_b3: "Manutenção de banco de dados SQL e suporte ao cliente.",
    exp_intern_b4: "Auxílio na análise de demandas e validações de sistemas.",
    proj_casal_desc: "Plataforma para casais organizarem compras com controle de orçamento, separação VR/VA e pesquisa de preços com IA.",
    proj_imov_desc: "Aplicação para simular financiamento imobiliário, calcular capacidade de compra e organizar renda, aportes e evolução patrimonial entre os participantes do plano.",
    proj_saude_desc: "Digitaliza e organiza documentos médicos usando OCR e IA para extrair informações automaticamente. Projeto pessoal com base acadêmica.",
    proj_date_desc: "Plataforma para organização de casamentos com catálogo de serviços, orçamento automático e e-mail.",
    proj_pitiquinho_desc: "E-commerce completo com cadastro de usuários, catálogo de produtos e controle de sessão com JSP.",
    proj_rodobus_desc: "Plataforma de reserva de passagens de ônibus. Gerente de projeto e líder técnico da equipe.",
    badge_academic: "Full-stack · Pessoal & Acadêmico",
    edu_ads_desc: "Desenvolvimento de competências em programação, banco de dados, engenharia de software e metodologias ágeis.",
    edu_eng_desc: "Foco em conversação, escrita e compreensão auditiva, incluindo vocabulário técnico aplicado ao ambiente profissional.",
    edu_tec_desc: "Desenvolvimento de projetos práticos, lógica de programação e sistemas utilizando JavaScript, C#, HTML, CSS e MySQL.",
    skill_backend: "<i class='fas fa-code'></i> Back-end",
    skill_database: "<i class='fas fa-database'></i> Banco de Dados",
    skill_cloud: "<i class='fas fa-cloud'></i> Cloud & DevOps",
    skill_frontend: "<i class='fas fa-palette'></i> Front-end",
    badge_fullstack: "Full-stack · IA Integrada",
    badge_tcc: "TCC · OCR + IA",
    badge_java_spring: "Java · Spring Boot",
    resume_csharp: "assets/curriculos/CSHARP.pdf",
    resume_java: "assets/curriculos/JAVA.pdf",
    resume_typescript: "assets/curriculos/TYPESCRIPT.pdf",
    contact_tag: "Vamos conversar",
    contact_title: "Contato",
    contact_intro: "Estou aberto a novas oportunidades, projetos e parcerias. Me chame por qualquer um dos canais abaixo.",
    contact_email_label: "E-mail",
    contact_phone_label: "Telefone",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_exp: "Experience",
    nav_edu: "Education",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_title: "Matheus<br><span class='highlight'>Rafael</span>",
    hero_sub: "Backend Developer with <strong>EXPERIENCE_PLACEHOLDER</strong> of solid experience in Node.js/TypeScript, C#/.NET and Java.<br>Expert in ERP systems, scalable APIs, and intelligent integrations.",
    hero_resumes: "Download resumes:",
    hero_ver_projetos: "View Projects",
    about_tag: "Who I am",
    about_title: "About me",
    about_text_1: "I'm AGE_PLACEHOLDER years old and a backend developer with <strong>EXPERIENCE_PLACEHOLDER</strong> of experience. Currently working at <strong>PWI Sistemas</strong>, where I develop and maintain corporate ERP systems with <strong>Node.js/TypeScript</strong> and SQL Server.",
    about_text_2: "I always keep up with market trends and I'm constantly developing new projects, whether to learn new technologies, solve real problems, or explore integrations with <strong>artificial intelligence</strong>.",
    projects_tag: "What I built",
    projects_title: "Projects",
    projects_personal: "✦ Personal Project",
    projects_academic: "🎓 Academic Projects",
    exp_tag: "Career Path",
    exp_title: "Experience",
    edu_tag: "Knowledge",
    edu_title: "Education",
    skills_tag: "Technologies",
    skills_title: "Skills",
    footer_text: "Made by Matheus Rafael · São Paulo, SP · 2026",
    // Roles & Details
    role_backend: "Backend Developer",
    role_dev: "Developer",
    role_intern: "IT Intern",
    company_pwi: "PWI Sistemas · Full-time · São Paulo (Hybrid)",
    company_pwi_intern: "PWI Sistemas · Internship · São Paulo (Hybrid)",
    exp_backend_p1: "Continuous development of ERP systems focusing on the backend using <strong>Node.js and TypeScript</strong>.",
    exp_backend_b1: "Development of solutions in payment, financial, and accounting areas.",
    exp_backend_b2: "Analysis and implementation of complete integrations with third-party APIs.",
    exp_backend_b3: "Internal process automation, eliminating repetitive manual tasks.",
    exp_backend_b4: "Resolution of critical integration issues and operational bug fixes.",
    exp_backend_b5: "SQL database modeling and maintenance with detailed technical documentation.",
    exp_dev_p1: "Evolution and maintenance of REST APIs and legacy systems.",
    exp_dev_b1: "Creation of new features and integrations with ERP systems in Node.js.",
    exp_dev_b2: "Development and maintenance of ERP modules in FoxPro.",
    exp_dev_b3: "SQL database maintenance and server configuration.",
    exp_dev_b4: "Specialized technical support and critical bug fixing.",
    exp_intern_p1: "Support in the development and maintenance of corporate systems.",
    exp_intern_b1: "Bug fixes and evolutionary improvements in ERP systems.",
    exp_intern_b2: "Development of new features using FoxPro.",
    exp_intern_b3: "SQL database maintenance and customer support.",
    exp_intern_b4: "Assistance in requirement analysis and system validations.",
    proj_casal_desc: "Platform for couples to organize shopping with budget control, VR/VA separation, and AI-powered price research.",
    proj_imov_desc: "Application to simulate real estate financing, calculate purchasing capacity, and organize income, contributions, and asset evolution among plan participants.",
    proj_saude_desc: "Digitizes and organizes medical documents using OCR and AI to automatically extract information. Personal project with academic foundation.",
    proj_date_desc: "Platform for wedding organization with service catalog, automatic budgeting, and email.",
    proj_pitiquinho_desc: "Complete e-commerce with user registration, product catalog, and session control with JSP.",
    proj_rodobus_desc: "Bus ticket reservation platform. Project manager and technical team leader.",
    badge_academic: "Full-stack · Personal & Academic",
    edu_ads_desc: "Development of skills in programming, databases, software engineering, and agile methodologies.",
    edu_eng_desc: "Focus on speaking, writing, and listening comprehension, including technical vocabulary for professional environments.",
    edu_tec_desc: "Development of practical projects, programming logic, and systems using JavaScript, C#, HTML, CSS, and MySQL.",
    skill_backend: "<i class='fas fa-code'></i> Back-end",
    skill_database: "<i class='fas fa-database'></i> Database",
    skill_cloud: "<i class='fas fa-cloud'></i> Cloud & DevOps",
    skill_frontend: "<i class='fas fa-palette'></i> Front-end",
    badge_fullstack: "Full-stack · AI Integrated",
    badge_tcc: "Graduation Project · OCR + AI",
    badge_java_spring: "Java · Spring Boot",
    resume_csharp: "assets/curriculos/CSHARP.pdf",
    resume_java: "assets/curriculos/JAVA.pdf",
    resume_typescript: "assets/curriculos/TYPESCRIPT.pdf",
    contact_tag: "Let's talk",
    contact_title: "Contact",
    contact_intro: "I'm open to new opportunities, projects, and partnerships. Reach out through any of the channels below.",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
  }
};

function switchLanguage(lang) {
  // Update dates dynamically first
  updateExperienceDates(lang);
  updateTotalExperience(lang);

  // Then update other translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === 'A' && key.startsWith('resume_')) {
        el.href = translations[lang][key];
      } else if (el.tagName === 'LI') {
        el.innerHTML = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Save preference
  localStorage.setItem('preferredLang', lang);
}

// Initial language
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'pt';
  switchLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

// ===== FADE-IN ON SCROLL =====
const fadeEls = document.querySelectorAll(
  '.project-card, .exp-item, .edu-item, .skill-category, .contact-card'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});
