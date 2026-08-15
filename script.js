(() => {
  'use strict';

  /* =========================================================
     TRANSLATIONS
     ========================================================= */
  const translations = {
    pt: {
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.experience': 'Experiência',
      'nav.education': 'Formação',
      'nav.skills': 'Skills',
      'nav.contact': 'Contato',

      'hero.badge': 'Disponível para oportunidades',
      'hero.role': 'Desenvolvedor Backend · EXPERIENCE_PLACEHOLDER · ERP & APIs Escaláveis',
      'hero.bio': 'Especialista em Node.js/TypeScript, C#/.NET e Java. Construo sistemas robustos que resolvem problemas reais.',
      'hero.location': 'São Paulo, SP',
      'hero.ctaProjects': 'Ver Projetos',
      'hero.cvCsharp': 'Currículo C# .NET',
      'hero.cvJava': 'Currículo Java',

      'about.title': 'Quem sou',
      'about.p1': 'Sou Desenvolvedor Back-end com experiência profissional em desenvolvimento, manutenção e evolução de sistemas ERP corporativos, atuando principalmente com Node.js, TypeScript, SQL Server e APIs REST. Atualmente na PWI Sistemas, desenvolvo soluções para processos de pagamento, financeiro e contabilidade, além de APIs, integrações entre sistemas e automação de processos internos.',
      'about.p2': 'Possuo experiência na análise de integrações ponta a ponta, incluindo plataformas como CargoWise e Magento, investigação e resolução de problemas críticos em APIs, otimização de consultas SQL e manutenção de sistemas legados. Além de Node.js e TypeScript, tenho experiência prática com C#/.NET, ASP.NET Core, Java/Spring Boot, MongoDB, Entity Framework, Docker e AWS. Tenho interesse em oportunidades como Desenvolvedor Back-end, Software Engineer ou Desenvolvedor de Integrações, especialmente em ambientes que envolvam APIs, sistemas corporativos, ERP e desenvolvimento de soluções escaláveis.',
      'about.statExp': 'experiência',
      'about.statProjects': 'projetos entregues',
      'about.statStacks': 'stacks principais',

      'projects.title': 'Projetos',
      'projects.sub': 'Uma seleção de sistemas que projetei e construí do zero, do modelo de dados à interface.',
      'projects.tabAll': 'Todos',
      'projects.tabPersonal': 'Projetos Pessoais',
      'projects.tabAcademic': 'Projetos Acadêmicos',
      'projects.demo': 'Ver Aplicação',
      'projects.casalplanner': 'Planejamento financeiro para casais, com metas compartilhadas e um assistente de IA (Groq/Llama 3.1) para sugestões de orçamento.',
      'projects.imovplan': 'Planejamento financeiro para compra e gestão de imóveis, simulando financiamentos e acompanhando investimentos imobiliários.',
      'projects.saudememora': 'Organização de histórico médico e exames com OCR e IA para extrair e estruturar dados de documentos de saúde.',
      'projects.pitiquinho': 'Controle financeiro pessoal para registrar receitas, despesas e acompanhar o orçamento mensal.',
      'projects.dateoflove': 'Projeto acadêmico para organizar encontros e momentos especiais de um casal, com agenda e lembretes.',
      'projects.rodobus': 'Sistema acadêmico de gestão de passagens rodoviárias, com venda de bilhetes e notificações automáticas por e-mail.',

      'exp.title': 'Experiência',
      'exp.p1': 'Jul 2025 — Presente · 1 ano 2 meses',
      'exp.role1': 'Desenvolvedor Back-end',
      'exp.desc1': 'Desenvolvimento e manutenção de sistemas ERP corporativos, integrações fiscais e com plataformas parceiras, em Node.js/TypeScript, C#/.NET e SQL Server.',
      'exp.p2': 'Nov 2023 — Jul 2025 · 1 ano 8 meses',
      'exp.role2': 'Desenvolvedor',
      'exp.desc2': 'Atuação em módulos do ERP, correção de bugs e desenvolvimento de novas funcionalidades para sistemas legados e integrações.',
      'exp.p3': 'Out 2022 — Nov 2023 · 1 ano 1 mês',
      'exp.role3': 'Estagiário de TI',
      'exp.desc3': 'Primeiros passos em desenvolvimento e suporte a sistemas internos, aprendendo as tecnologias e processos da empresa.',

      'edu.title': 'Formação',
      'edu.c1': 'Análise e Desenvolvimento de Sistemas',
      'edu.c2': 'Inglês — Pré-avançado',
      'edu.c3': 'Ensino Técnico em Informática',

      'skills.title': 'Skills',
      'skills.backend': 'Back-end',
      'skills.db': 'Banco de Dados',
      'skills.cloud': 'Cloud & DevOps',
      'skills.frontend': 'Front-end',

      'contact.title': 'Contato',
      'contact.sub': 'Aberto a novas oportunidades como desenvolvedor backend. Vamos conversar.',
      'contact.phone': 'Telefone',

      'footer.made': 'Feito por Matheus Rafael · São Paulo, SP · 2026',
      'footer.online': 'status: online',
    },
    en: {
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'hero.badge': 'Available for opportunities',
      'hero.role': 'Backend Developer · EXPERIENCE_PLACEHOLDER · ERP & Scalable APIs',
      'hero.bio': 'Specialist in Node.js/TypeScript, C#/.NET and Java. I build robust systems that solve real problems.',
      'hero.location': 'São Paulo, Brazil',
      'hero.ctaProjects': 'View Projects',
      'hero.cvCsharp': 'Resume — C# .NET',
      'hero.cvJava': 'Resume — Java',

      'about.title': 'About me',
      'about.p1': 'I am a Backend Developer with professional experience in developing, maintaining, and evolving corporate ERP systems, primarily working with Node.js, TypeScript, SQL Server, and REST APIs. Currently at PWI Sistemas, I develop solutions for payment, financial, and accounting processes, as well as APIs, system integrations, and internal process automation.',
      'about.p2': 'I have experience in end-to-end integration analysis, including platforms like CargoWise and Magento, investigation and resolution of critical API issues, SQL query optimization, and legacy system maintenance. Beyond Node.js and TypeScript, I have practical experience with C#/.NET, ASP.NET Core, Java/Spring Boot, MongoDB, Entity Framework, Docker, and AWS. I am interested in opportunities as Backend Developer, Software Engineer, or Integration Developer, especially in environments involving APIs, corporate systems, ERP, and scalable solution development.',
      'about.statExp': 'experience',
      'about.statProjects': 'projects shipped',
      'about.statStacks': 'core stacks',

      'projects.title': 'Projects',
      'projects.sub': 'A selection of systems I designed and built from the ground up, from data model to interface.',
      'projects.tabAll': 'All',
      'projects.tabPersonal': 'Personal Projects',
      'projects.tabAcademic': 'Academic Projects',
      'projects.demo': 'View Application',
      'projects.casalplanner': 'Financial planning for couples, with shared goals and an AI assistant (Groq/Llama 3.1) for budget suggestions.',
      'projects.imovplan': 'Financial planning for buying and managing real estate, simulating financing and tracking property investments.',
      'projects.saudememora': 'Organizes medical history and exams with OCR and AI to extract and structure data from health documents.',
      'projects.pitiquinho': 'Personal finance tracker for recording income and expenses and following the monthly budget.',
      'projects.dateoflove': 'Academic project to organize dates and special moments for a couple, with a shared agenda and reminders.',
      'projects.rodobus': 'Academic bus-ticketing management system, with ticket sales and automatic email notifications.',

      'exp.title': 'Experience',
      'exp.p1': 'Jul 2025 — Present · 1 year 2 months',
      'exp.role1': 'Backend Developer',
      'exp.desc1': 'Development and maintenance of corporate ERP systems, tax and partner-platform integrations, using Node.js/TypeScript, C#/.NET and SQL Server.',
      'exp.p2': 'Nov 2023 — Jul 2025 · 1 year 8 months',
      'exp.role2': 'Developer',
      'exp.desc2': 'Worked across ERP modules, fixing bugs and building new features for legacy systems and integrations.',
      'exp.p3': 'Oct 2022 — Nov 2023 · 1 year 1 month',
      'exp.role3': 'IT Intern',
      'exp.desc3': 'First steps in development and support for internal systems, learning the company\u2019s technologies and processes.',

      'edu.title': 'Education',
      'edu.c1': 'Systems Analysis and Development',
      'edu.c2': 'English — Upper-Intermediate',
      'edu.c3': 'Technical Degree in Information Technology',

      'skills.title': 'Skills',
      'skills.backend': 'Back-end',
      'skills.db': 'Databases',
      'skills.cloud': 'Cloud & DevOps',
      'skills.frontend': 'Front-end',

      'contact.title': 'Contact',
      'contact.sub': "Open to new opportunities as a backend developer. Let's talk.",
      'contact.phone': 'Phone',

      'footer.made': 'Made by Matheus Rafael · São Paulo, Brazil · 2026',
      'footer.online': 'status: online',
    }
  };

  const htmlEl = document.documentElement;
  const langButtons = document.querySelectorAll('.lang-toggle button');

  function applyLang(lang) {
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    htmlEl.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobileMenu));

  /* =========================================================
     PROJECT FILTER TABS
     ========================================================= */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.hidden = !show;
      });
    });
  });

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* =========================================================
     ACTIVE NAV LINK ON SCROLL
     ========================================================= */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 140;
    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();
